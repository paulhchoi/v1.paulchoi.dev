import PropTypes from 'prop-types';
import React from 'react';

import MainLogo from '../static/logo/pc-logo2.inline.svg';
import UseAnimations from 'react-useanimations';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Icon } from './Icon/Icon';

// color generation: https://coolors.co/413c58-a3c4bc-bfd7b5-e7efc5-f2dda4

const Header = ({ siteTitle }) => {
  const links = [
    {
      text: 'linkedin',
      url: 'https://www.linkedin.com/in/paulhchoi',
      svgPath: <FaLinkedin alt={"LinkedIn Icon"}/>,
    },
    {
      text: 'github',
      url: 'https://github.com/paulhchoi',
      svgPath: <FaGithub alt={"Github Icon"}/>,
    },
    {
      text: 'email',
      url: 'mailto:paul@paulchoi.dev',
      svgPath: <FaEnvelope alt={"Envelope Icon"}/>,
    },
  ];

  const linksGen = [];

  links.map((link) =>
    linksGen.push(
      <Icon
        key={link.text}
        url={link.url}
        type={link.text}
        svgPath={link.svgPath}
      />,
    ),
  );

  return (
    <header>
      <div className="max-w-screen-xl mx-auto mb-8 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-between ">
        <div className="h-10 w-10">
          <MainLogo />
        </div>
        <div className="flex justify-center space-x-8 md:order-2">
          {linksGen}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
