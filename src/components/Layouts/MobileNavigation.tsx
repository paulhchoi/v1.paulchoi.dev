import React, { useLayoutEffect } from 'react';
import { Link } from 'gatsby';
import { FaTimes } from 'react-icons/fa';
import { Icon } from '../Icon/Icon';
import { socialLinksData } from '../../data/data';
import PropTypes from 'prop-types';

const MobileNavigation = ({ handleModalClose }) => {
  useLockBodyScroll();

  return (
    <div
      className={
        'bg-primary text-primary w-full h-full fixed z-10 flex flex-col'
      }
    >
      <div className="flex flex-row text-2xl justify-end py-6 mb-8">
        <div onClick={() => handleModalClose()}>
          <FaTimes className="m-4 umami--click--header-mobileMenu-close-icon" />
        </div>
      </div>
      <div className="px-4 flex flex-col text-3xl">
        <Link
          to={'/'}
          className="mb-8 no-underline umami--click--mobMenu-About-link"
          onClick={() => handleModalClose()}
        >
          ABOUT
        </Link>
        <Link
          to={'/projects'}
          className="mb-8 no-underline umami--click--mobMenu-Projects-link"
          onClick={() => handleModalClose()}
        >
          PROJECTS
        </Link>
        <Link
          to={'/resume'}
          className="mb-8 no-underline umami--click--mobMenu-Resume-link"
          onClick={() => handleModalClose()}
        >
          RESUME
        </Link>
        <Link
          to={'/uses'}
          className="mb-8 no-underline umami--click--mobMenu-Uses-link"
          onClick={() => handleModalClose()}
        >
          USES
        </Link>
      </div>
      <div className="flex-1" />

      <div className="flex flex-row text-2xl space-x-8 max-w-sm mx-auto mb-8 p-4">
        {linksGen}
      </div>
    </div>
  );
};

export default MobileNavigation;

MobileNavigation.propTypes = {
  handleModalClose: PropTypes.func,
};

function useLockBodyScroll() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = originalStyle);
  }, []);
}

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
        umami(`mobMenu-${link.text}-icon`)
      }
    />,
  ),
);
