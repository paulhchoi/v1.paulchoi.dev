import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Icon } from './Icon/Icon';
import UseAnimations from 'react-useanimations';

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
        <div className="md:order-2">
          <a href="mailto:paul@paulchoi.dev">
            <div className="text-gray-600 font-medium flex justify-center items-center underline hover:opacity-75 transition duration-150">
              <UseAnimations animationKey="mail" />
              <div className="ml-2">Say hi! 👋</div>
            </div>
          </a>
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

export default Footer;
