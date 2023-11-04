import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';
import { createSlice } from '@reduxjs/toolkit';

// ejemplo de store con redux
// const authState = useSelector(selectAuthState);
// const dispatch = useDispatch();
// Type for our state
export interface UserState {
  userState: boolean;
}

// Initial state
const initialState: UserState = {
  userState: false,
};

// Actual Slice
export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setUserState(state, action) {
      state.userState = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setUserState } = userSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.userState;

export default userSlice.reducer;
