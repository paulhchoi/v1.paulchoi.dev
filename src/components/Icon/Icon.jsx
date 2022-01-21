import React from 'react';
import PropTypes from 'prop-types';

export const Icon = ({ url, type, svgPath }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl text-secondary hover:opacity-75"
      alt={type}
      aria-labelledby={type}
    >
      {svgPath}
    </a>
  );
};

Icon.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
  svgPath: PropTypes.element,
};
