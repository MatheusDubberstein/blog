import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomeLayout from '~/pages/_layouts/home';
import DefaultLayout from '~/pages/_layouts/default';

import history from '~/services/history';

export default function RouteWrapper({ component: Component, ...rest }) {
  const { pathname } = history.location;
  const Layout = pathname === '/' ? HomeLayout : DefaultLayout;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
