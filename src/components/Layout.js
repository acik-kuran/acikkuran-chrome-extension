import React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from './SocialLinks';
import Logo from './Logo';

const Layout = ({ children }) => {
  return (
    <div className="main">
      <div className="header">
        <Logo />
        <SocialLinks />
      </div>
      <div className="content">
        <div className="panel">{children}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.string.isRequired
};

export default Layout;
