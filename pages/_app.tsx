import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../customMui';
import { useStore } from 'react-redux';
import { wrapper } from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  const store: any = useStore();
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </PersistGate>
  );
}
export default wrapper.withRedux(MyApp);
