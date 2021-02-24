import React from 'react';
import App from '../components/app';
import ExternalRedirect from './ExternalRedirect';
import SEO from '../components/seo';

const QR3Page = () => (
  <App>
    <SEO title="QR3" />
    <ExternalRedirect slug="https://pfc.us/" />
  </App>
);

export default QR3Page;
