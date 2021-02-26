import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const PaginateNavigate = ({ prevText, prevLink, nextText, nextLink }) => {
  return (
    <>
      <div className="flex-1" />
      <div className="flex flex-row max-w-xl justify-center space-x-12 mt-24 text-xl text-secondary">
        {prevText && prevLink && (
          <Link
            to={prevLink}
            className={'flex flex-inline items-center no-underline'}
          >
            <FaArrowLeft className="mr-4 opacity-75 text-sm" /> {prevText}{' '}
          </Link>
        )}
        {nextText && nextLink && (
          <Link
            to={nextLink}
            className={'flex flex-inline items-center no-underline'}
          >
            {nextText} <FaArrowRight className={'ml-4 opacity-75 text-sm'} />
          </Link>
        )}
      </div>
    </>
  );
};

export default PaginateNavigate;

PaginateNavigate.propTypes = {
  prevText: PropTypes.string,
  prevLink: PropTypes.string,
  nextText: PropTypes.string,
  nextLink: PropTypes.string,
};
