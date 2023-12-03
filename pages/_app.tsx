import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../customMui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
