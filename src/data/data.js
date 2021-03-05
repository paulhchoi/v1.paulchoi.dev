import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

export const socialLinksData = [
  {
    text: 'linkedin',
    url: 'https://www.linkedin.com/in/paulhchoi',
    svgPath: <FaLinkedin />,
  },
  {
    text: 'github',
    url: 'https://github.com/paulhchoi',
    svgPath: <FaGithub />,
  },
  {
    text: 'twitter',
    url: 'https://twitter.com/pchoi789',
    svgPath: <FaTwitter />,
  },
  {
    text: 'email',
    url: 'mailto:paul@paulchoi.dev',
    svgPath: <FaEnvelope />,
  },
];
