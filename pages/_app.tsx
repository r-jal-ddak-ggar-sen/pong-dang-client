import { ThemeProvider } from '@emotion/react';
import { theme } from 'components/theme';
import type { AppProps } from 'next/app';

import 'styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
