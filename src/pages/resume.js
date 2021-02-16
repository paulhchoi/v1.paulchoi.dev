import React from 'react';
import SEO from '../components/seo';
import App from '../components/app';
import PaginateNavigate from '../components/PaginateNavigate';

const ResumePage = () => (
  <App>
    <SEO title="Resume" />
    <h2 className="mb-6 font-semibold text-2xl">Resume</h2>

    <p className="mb-6">
      <a href="mailto:paul@paulchoi.dev">Send me a message</a> and I'll be glad
      to share my resume with you!
    </p>
    <PaginateNavigate
      prevText={'Projects'}
      prevLink={'/projects'}
      nextText={'Uses'}
      nextLink={'/uses'}
    />
  </App>
);

export default ResumePage;
