import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import { theme } from 'src/utils/theme';
import 'styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
