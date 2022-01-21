import PropTypes from 'prop-types';
import React from 'react';

import { FaBars } from 'react-icons/fa';
import { Icon } from '../Icon/Icon';
import HeadshotImage from '../headshotImage';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import TextLink from '../Link/TextLink';
import MobileNavigation from './MobileNavigation';
import Headroom from 'react-headroom';
import { ThemeToggle } from '../../utils/themeToggle';
import { socialLinksData } from '../../data/data';

// color generation: https://coolors.co/413c58-a3c4bc-bfd7b5-e7efc5-f2dda4

const Header = ({ siteTitle }) => {
  const [isMobNavOpen, setIsMobNavOpen] = React.useState(false);

  const linksGen = [];

  socialLinksData.map((link) =>
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
        <div className="flex flex-row max-w-screen-xl px-4 py-8 bg-primary sm:px-6 lg:py-12 lg:px-16">
          <div className="flex flex-row sm:flex-col lg:flex-row">
            <div
              className="w-10 h-10 my-auto rounded-full sm:h-16 sm:w-16 lg:h-24 lg:w-24 bg-accent"
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
                <div className="text-2xl font-black leading-none tracking-tight sm:mt-4 lg:mt-0 sm:text-3xl lg:text-4xl">
                  Paul Choi
                </div>
              </Link>
              <div className="justify-start hidden mt-4 space-x-10 text-xs leading-none tracking-widest uppercase sm:flex lg:mt-3 lg:text-sm text-secondary">
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
          <div className="px-2 my-auto sm:mb-8 lg:mb-12 sm:px-8">
            <ThemeToggle />
          </div>
          <div className="justify-center hidden my-auto space-x-4 sm:flex sm:mb-8 lg:mb-12 sm:space-x-8">
            {linksGen}
          </div>
          <div className="pl-4 m-auto text-xl sm:hidden sm:pl-8 text-secondary hover:opacity-75">
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
