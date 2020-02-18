import React from 'react';
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer
      style={{
        background: `#657153`,
        height: '3rem',
        marginTop: `1rem`,
        position: 'relative',
      }}
    >
      <div
        className='m-auto h-full'
        style={{
          maxWidth: 960,
          // position: 'absolute',
          // padding: '0.5rem'
        }}
      >
          <Link
            to="/"
            style={{
              color: `#BFD7B5`,
              textDecoration: `none`,
            }}
          >
            {/*© {new Date().getFullYear()}, Paul Choi*/}
          </Link>
      </div>
    </footer>
  );
};

export default Footer;
