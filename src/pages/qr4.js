import React from 'react';
import Layout from '../components/Layouts/layout';
import ExternalRedirect from './ExternalRedirect';
import SEO from "../components/seo"

const QR4Page = () => (
  <Layout>
    <SEO title="QR4" />
    <ExternalRedirect slug="https://youtu.be/Tish3KkNnLc" />
  </Layout>
);

export default QR4Page;
