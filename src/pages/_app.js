import { ThemeProvider } from 'theme-ui';

import theme from '@styles/theme';
import GlobalStyles from '@styles/global';

import Layout from '@components/Layout';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout data={pageProps.data}>
        {getLayout(<Component {...pageProps} />)}
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
