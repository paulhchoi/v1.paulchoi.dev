import React from 'react';
import App from '../components/app';
import ExternalRedirect from './ExternalRedirect';
import SEO from '../components/seo';

const QR2Page = () => (
  <App>
    <SEO title="QR2" />
    <ExternalRedirect slug="https://metrophilly.org" />
  </App>
);

export default QR2Page;
