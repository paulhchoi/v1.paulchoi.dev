import React from 'react';
import Layout from '../components/Layouts/layout';
import ExternalRedirect from './ExternalRedirect';
import SEO from '../components/seo';

const QR2Page = () => (
  <Layout>
    <SEO title="QR2" />
    <ExternalRedirect slug="https://metrophilly.org" />
  </Layout>
);

export default QR2Page;
