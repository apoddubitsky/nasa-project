// libraries
import React from 'react';
import { oneOfType, node } from 'prop-types';

const Layout = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

Layout.propTypes = {
  children: oneOfType([node]).isRequired,
};

export default Layout;
