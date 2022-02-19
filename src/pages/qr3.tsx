import React from 'react';
import App from '../components/app';
import SEO from '../components/seo';
import ExternalRedirect from './ExternalRedirect';

const QR3Page = () => (
  <App>
    <SEO title="QR3" />
    <ExternalRedirect slug="https://pfc.us/" />
  </App>
);

export default QR3Page;
