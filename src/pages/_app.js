import Layout from '@components/Layout';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Layout data={pageProps.data}>
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  );
}

export default MyApp;
