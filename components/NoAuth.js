/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

function NoAuth({ component: Component, pageProps }) {
  return (
    <>
      <div
        // className="w-75 mx-auto p-3 mb-4 mt-4 rounded-lg"
        className="noauth-content-cont"
        style={{
          backgroundColor: '#413a49',
        }}
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
