import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import MainLogo from '../static/logo/pc-logo2.inline.svg';
import UseAnimations from 'react-useanimations';

// color generation: https://coolors.co/413c58-a3c4bc-bfd7b5-e7efc5-f2dda4

const Header = ({ siteTitle }) => (
  <header>
    <div className="max-w-screen-xl mx-auto mb-8 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-between ">
      <div className="h-10 w-10">
        <MainLogo />
      </div>
      <a href="mailto:paul@paulchoi.dev">
      <div className="text-gray-600 font-medium inline-flex items-center underline hover:opacity-75  transition duration-150">
          <UseAnimations animationKey="mail" />
          <div className='ml-2'>Email me</div>
      </div>
      </a>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
