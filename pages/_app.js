import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head  from 'next/head';
import Script from 'next/script'
import Layout from '../component/Layout';
function MyApp({ Component, pageProps }) {
  return (


    <Layout>
      <Component {...pageProps} />
    </Layout>

  );
}

export default MyApp;
