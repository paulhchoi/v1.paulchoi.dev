import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa';

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
      <div className="max-w-screen-xl mx-auto mt-8 py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-8 md:order-2">
          {linksGen}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base leading-6 text-gray-600">
            &copy; {new Date().getFullYear()} Paul Choi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const Icon = ({ url, type, svgPath }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-500 text-xl"
    >
      <span className="sr-only">{type}</span>
      {svgPath}
    </a>
  );
};

export default Footer;
