// import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

// import { createWrapper } from 'next-redux-wrapper';
// import { userSlice } from './user.store';

// const makeStore = () =>
//   configureStore({
//     reducer: {
//       [userSlice.name]: userSlice.reducer,
//     },
//     devTools: true,
//   });

// export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action
// >;

// export const wrapper = createWrapper<AppStore>(makeStore);

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import { createWrapper } from 'next-redux-wrapper';
import storage from 'redux-persist/lib/storage';
import { userSlice } from './user.store';

export type AppStore = ReturnType<typeof makeStore>;

const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
});

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export const makeStore = () => {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return makeConfiguredStore();
  } else {
    // we need it only on client side
    const persistConfig = {
      key: 'nextjs',
      whitelist: ['auth'], // make sure it does not clash with server keys
      storage,
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store: any = configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV !== 'production',
    });
    store.__persistor = persistStore(store); // Nasty hack
    return store;
  }
};

// Previous codes

export const wrapper = createWrapper<AppStore>(makeStore);
