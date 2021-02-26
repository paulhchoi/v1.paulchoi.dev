import React from 'react';
import axios from 'axios';
import App from '../components/app';
import SEO from '../components/seo';
import ExternalRedirect from './ExternalRedirect';

const QR1Page = () => {
  return (
    <App>
      <SEO title="QR1" />
      <ExternalRedirect slug={`https://pchoi.me`} />
    </App>
  );
};

export default QR1Page;
