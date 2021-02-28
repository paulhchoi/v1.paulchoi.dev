import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Icon } from '../Icon/Icon';

const Footer = () => {
  const links = [
    {
      text: 'twitter',
      url: 'https://twitter.com/pchoi789',
      svgPath: <FaTwitter />,
    },
    {
      text: 'github',
      url: 'https://github.com/paulhchoi',
      svgPath: <FaGithub />,
    },
    {
      text: 'linkedin',
      url: 'https://www.linkedin.com/in/paulhchoi',
      svgPath: <FaLinkedin />,
    },
    {
      text: 'email',
      url: 'mailto:paul@paulchoi.dev',
      svgPath: <FaEnvelope />,
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
    <footer>
      <div className="max-w-screen-xl px-4 py-8 mt-8 sm:px-6 lg:pl-40 lg:pr-16 lg:py-12 sm:flex sm:items-center sm:justify-between">
        <div className="my-auto sm:order-2">
          <a href="mailto:paul@paulchoi.dev">
            <div className="text-secondary font-medium flex justify-center items-center underline hover:opacity-75 transition duration-150 umami--click--footer-Say-Hi-email-link">
              <FaEnvelope />
              <div className="ml-2">Say hi! 👋</div>
            </div>
          </a>
        </div>
        <div className="my-auto mt-4 sm:mt-auto lg:ml-6 sm:order-1 text-center text-base text-secondary">
          &copy; {new Date().getFullYear()} Paul Choi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
