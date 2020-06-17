import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

// color generation: https://coolors.co/413c58-a3c4bc-bfd7b5-e7efc5-f2dda4

const Header = ({ siteTitle }) => (
  <div className="mb-4">
    <div className="max-w-screen-xl mx-auto">
      <header className="inline-flex w-full px-4 py-8">
        <div className="flex-1 font-medium">@pchoi789</div>
        <div className="flex-grow" />
        <div className="flex-shrink font-medium underline hover:opacity-75">
          <a href="mailto:paul@paulchoi.dev">Email me</a>
        </div>
      </header>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
