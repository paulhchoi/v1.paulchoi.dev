import PropTypes from 'prop-types';
import React from 'react';

import { FaBars, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Icon } from '../Icon/Icon';
import HeadshotImage from '../headshotImage';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import TextLink from '../Link/TextLink';
import MobileNavigation from './MobileNavigation';
import Headroom from 'react-headroom';
import { ThemeToggle } from '../../utils/themeToggle';

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
        onClick={() =>
          // eslint-disable-next-line no-undef
          umami(`header-${link.text}-icon`)
        }
      />,
    ),
  );

  return (
    <header>
      {isMobNavOpen && <MobileNavigation handleModalClose={setIsMobNavOpen} />}

      <Headroom>
        {/* <div className="w-full shadow-md"> */}
        <div className="flex flex-row max-w-screen-xl bg-primary py-8 px-4 sm:px-6 lg:py-12 lg:px-16">
          <div className="flex flex-row sm:flex-col lg:flex-row">
            <div
              className="h-10 w-10 sm:h-16 sm:w-16 lg:h-24 lg:w-24 my-auto bg-accent rounded-full"
              css={css`
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
              `}
            >
              <Link
                to={'/'}
                // eslint-disable-next-line no-undef
                onClick={() => umami(`header-main-avatar-icon`)}
              >
                <HeadshotImage />
              </Link>
            </div>
            <div className="flex flex-col my-auto ml-4 sm:ml-0 lg:ml-6">
              <Link
                className="no-underline"
                to={'/'}
                // eslint-disable-next-line no-undef
                onClick={() => umami(`header-main-Paul-Choi-brand-link`)}
              >
                <div className="font-black sm:mt-4 lg:mt-0 tracking-tight leading-none text-2xl sm:text-3xl lg:text-4xl">
                  Paul Choi
                </div>
              </Link>
              <div className="hidden sm:flex justify-start space-x-10 mt-4 lg:mt-3 uppercase leading-none text-xs lg:text-sm tracking-widest text-secondary">
                <TextLink
                  to={'/'}
                  className={'umami--click--header-About-link'}
                >
                  About
                </TextLink>
                <TextLink
                  to={'/projects'}
                  className={'umami--click--header-Projects-link'}
                  i
                >
                  Projects
                </TextLink>
                <TextLink
                  to={'/resume'}
                  className={'umami--click--header-Resume-link'}
                >
                  Resume
                </TextLink>
                <TextLink
                  to={'/uses'}
                  className={'umami--click--header-Uses-link'}
                >
                  Uses
                </TextLink>
              </div>
            </div>
          </div>
          <div className="flex-grow" />
          <div className="my-auto sm:mb-8 lg:mb-12 px-2 sm:px-8">
            <ThemeToggle />
          </div>
          <div className="hidden sm:flex justify-center my-auto sm:mb-8 lg:mb-12 space-x-4 sm:space-x-8">
            {linksGen}
          </div>
          <div className="sm:hidden pl-4 sm:pl-8 m-auto text-secondary hover:opacity-75 text-xl">
            <FaBars
              alt={'Open Menu'}
              className={'umami--click--header-mobileMenu-open-icon'}
              onClick={() => setIsMobNavOpen(!isMobNavOpen)}
            />
          </div>
        </div>
        {/* </div> */}
      </Headroom>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
