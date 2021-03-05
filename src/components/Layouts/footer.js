import React from 'react';
import { Icon } from '../Icon/Icon';
import { FaEnvelope } from 'react-icons/fa';
import { socialLinksData } from '../../data/data';

const Footer = () => {
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
          umami(`footer-${link.text}-icon`)
        }
      />,
    ),
  );

  return (
    <footer>
      <div className="max-w-screen-xl px-4 py-8 mt-8 sm:px-6 lg:pl-40 lg:pr-16 lg:py-12 sm:flex sm:items-center sm:justify-between">
        <div className="hidden sm:flex my-auto sm:order-2">
          <a href="mailto:paul@paulchoi.dev">
            <div className="text-secondary font-medium flex justify-center items-center underline hover:opacity-75 transition duration-150 umami--click--footer-Say-Hi-email-link">
              <FaEnvelope />
              <div className="ml-2">Say hi! 👋</div>
            </div>
          </a>
        </div>

        <div className="flex sm:hidden justify-center my-auto sm:order-2 sm:mb-8 lg:mb-12 space-x-4 sm:space-x-8">
          {linksGen}
        </div>

        <div className="my-auto mt-4 sm:mt-auto lg:ml-6 sm:order-1 text-center text-base text-secondary">
          &copy; {new Date().getFullYear()} Paul Choi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
