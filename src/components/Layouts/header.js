import PropTypes from 'prop-types';
import React from 'react';

import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { Icon } from '../Icon/Icon';
import HeadshotImage from '../headshotImage';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import TextLink from '../Link/TextLink';
import MobileNavigation from './MobileNavigation';
import Headroom from 'react-headroom';

// color generation: https://coolors.co/413c58-a3c4bc-bfd7b5-e7efc5-f2dda4

const Header = ({ siteTitle }) => {
  const [isMobNavOpen, setIsMobNavOpen] = React.useState(false);

  const links = [
    {
      text: 'linkedin',
      url: 'https://www.linkedin.com/in/paulhchoi',
      svgPath: <FaLinkedin alt={'LinkedIn Icon'} />,
      hideOnMobile: false,
    },
    {
      text: 'github',
      url: 'https://github.com/paulhchoi',
      svgPath: <FaGithub alt={'Github Icon'} />,
      hideOnMobile: true,
    },
    {
      text: 'email',
      url: 'mailto:paul@paulchoi.dev',
      svgPath: <FaEnvelope alt={'Envelope Icon'} />,
      hideOnMobile: true,
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
      {isMobNavOpen && <MobileNavigation handleModalClose={setIsMobNavOpen} />}

      <Headroom>
        <div className="flex flex-row max-w-screen-xl bg-gray-100 py-8 px-4 mb-8 sm:px-6 lg:py-12 lg:px-16">
          <div className="flex flex-row sm:flex-col lg:flex-row">
            <div
              className="h-10 w-10 sm:h-16 sm:w-16 lg:h-24 lg:w-24 my-auto bg-green-100 rounded-full"
              css={css`
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
              `}
            >
              <Link to={'/'}>
                <HeadshotImage />
              </Link>
            </div>
            <div className="flex flex-col my-auto ml-4 sm:ml-0 lg:ml-6">
              <Link className="no-underline" to={'/'}>
                <div className="font-black sm:mt-4 lg:mt-0 tracking-tight leading-none text-2xl sm:text-3xl lg:text-4xl text-gray-900">
                  Paul Choi
                </div>
              </Link>
              <div className="hidden sm:flex justify-start space-x-10 mt-4 lg:mt-3 uppercase leading-none text-xs lg:text-sm tracking-widest text-gray-700">
                <TextLink to={'/'}>About</TextLink>
                <TextLink to={'/projects'}>Projects</TextLink>
                <TextLink to={'/resume'}>Resume</TextLink>
                <TextLink to={'/uses'}>Uses</TextLink>
              </div>
            </div>
          </div>
          <div className="flex-grow" />
          <div className="flex justify-center my-auto sm:mb-8 lg:mb-12 space-x-4 sm:space-x-8">
            {linksGen}
          </div>
          <div className="sm:hidden pl-4 sm:pl-8 m-auto text-gray-600 hover:text-gray-500 text-xl">
            <FaBars
              alt={'Open Menu'}
              onClick={() => setIsMobNavOpen(!isMobNavOpen)}
            />
          </div>
        </div>
      </Headroom>
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
