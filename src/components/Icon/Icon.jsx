import React from 'react';
import PropTypes from 'prop-types';

export const Icon = ({ url, type, svgPath }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-secondary hover:opacity-75 text-xl"
    >
      <span className="sr-only">{type}</span>
      {svgPath}
    </a>
  );
};

Icon.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
  svgPath: PropTypes.element,
};
