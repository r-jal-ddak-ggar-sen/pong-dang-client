import { ThemeProvider } from '@emotion/react';
import { Layout } from 'components/Layout';
import type { AppProps } from 'next/app';

import { theme } from 'src/utils/theme';
import Header from 'components/Header';
import 'styles/global.css';
import UserProvider from 'provider/UserProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
