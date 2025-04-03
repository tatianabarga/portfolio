/* eslint-disable react/prop-types */
import Head from 'next/head';
import NoAuth from '../components/NoAuth';
import '../styles/globals.scss';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-cont">
      <div className="auth-cont">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Tatiana Barga</title>
        </Head>
        <NoAuth
          component={Component}
          pageProps={pageProps}
        />
      </div>

    </div>
  );
}

export default MyApp;
