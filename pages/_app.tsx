import { ThemeProvider } from '@emotion/react';
import { Layout } from 'components/Layout';
import type { AppProps } from 'next/app';

import { theme } from 'src/utils/theme';
import Header from 'components/Header';
import 'styles/global.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
  );
}
