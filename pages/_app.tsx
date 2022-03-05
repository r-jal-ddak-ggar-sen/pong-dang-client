import { ThemeProvider } from '@emotion/react';
import { Layout } from 'components/Layout';
import type { AppProps } from 'next/app';

import { theme } from 'src/utils/theme';
import Header from 'components/Header';
import 'styles/global.css';

const HEADER_EXCEPTIONS = ['/sign'];

export default function App({ Component, pageProps, router }: AppProps) {
  const hasHeader = !HEADER_EXCEPTIONS.includes(router.pathname);
  return (
    <ThemeProvider theme={theme}>
      <Layout header={hasHeader ? <Header /> : null}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
