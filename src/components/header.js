import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

// color generation: https://coolors.co/413c58-a3c4bc-bfd7b5-e7efc5-f2dda4

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#657153`,
      height: '3rem',
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '75rem',
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#BFD7B5`,
            textDecoration: `none`,
          }}
        >
          {/*{siteTitle}*/}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
