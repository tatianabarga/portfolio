/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

function NoAuth({ component: Component, pageProps }) {
  return (
    <>
      <div
        className="noauth-content-cont"
      >
        <NavBar />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

NoAuth.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default NoAuth;
