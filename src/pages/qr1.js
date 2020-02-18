import React from 'react';
import Layout from '../components/layout';
import ExternalRedirect from './ExternalRedirect';
import SEO from '../components/seo';
import { Redirect, Router } from '@reach/router';

const QR1Page = () => {
  return (
    <Layout>
      <SEO title="QR1" />
      Redirecting...
    </Layout>
  );
};

export default QR1Page;
