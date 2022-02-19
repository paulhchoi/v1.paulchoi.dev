import React from 'react';
import PropTypes from 'prop-types';

const ExternalRedirect = ({ slug }) => {
  const isClient = typeof window === 'object';
  isClient && window.location.replace(slug);

  return <div className="text-center">Redirecting...</div>;
};

export default ExternalRedirect;

ExternalRedirect.propTypes = {
  slug: PropTypes.string,
};
