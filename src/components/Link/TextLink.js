import React from 'react';
import { Link } from 'gatsby';

const TextLink = ({ children, to }) => {
  return (
    <Link
      className="no-underline font-medium hover:opacity-50"
      activeClassName={
        'font-black cursor-default hover:no-underline hover:opacity-100 cursor-default'
      }
      to={to}
    >
      {children}
    </Link>
  );
};

export default TextLink;
