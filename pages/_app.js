/* eslint-disable react/prop-types */
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from 'next/image';
import NoAuth from '../components/NoAuth';
import '../styles/globals.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-cont">
      {/* <div className="bg-img">
        <Image src="/../public/background.jpg" width="100%" height="100%" />
      </div> */}
      <div className="auth-cont">
        <NoAuth
          component={Component}
          pageProps={pageProps}
        />
      </div>

    </div>
  );
}

export default MyApp;
