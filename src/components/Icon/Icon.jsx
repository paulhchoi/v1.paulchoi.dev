import React from 'react';

export const Icon = ({ url, type, svgPath }) => {
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
