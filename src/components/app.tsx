import React from 'react';
import Layout from './Layouts/layout';
import SEO from './seo';
import PropTypes from 'prop-types';

const App = ({ children, ...props }) => {
  const { seo } = props;

  return (
    <Layout>
      <SEO title={seo && seo.title} />
      {children}
    </Layout>
  );
};

export default App;

App.propTypes = {
  seo: PropTypes.string,
  children: PropTypes.node.isRequired,
};
