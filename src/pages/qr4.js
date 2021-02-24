import React from 'react';
import App from '../components/app';
import ExternalRedirect from './ExternalRedirect';
import SEO from '../components/seo';

const QR4Page = () => (
  <App>
    <SEO title="QR4" />
    <ExternalRedirect slug="https://youtu.be/Tish3KkNnLc" />
  </App>
);

export default QR4Page;
