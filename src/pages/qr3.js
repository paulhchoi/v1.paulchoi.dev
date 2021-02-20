import React from 'react';
import Layout from '../components/Layouts/layout';
import ExternalRedirect from './ExternalRedirect';
import SEO from '../components/seo';

const QR3Page = () => (
  <Layout>
    <SEO title="QR3" />
    <ExternalRedirect slug="https://pfc.us/" />
  </Layout>
);

export default QR3Page;
