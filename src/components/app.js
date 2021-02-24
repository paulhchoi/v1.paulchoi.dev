import React from 'react';
import Layout from './Layouts/layout';
import SEO from './seo';
import { ThemeProvider } from '../utils/themeContext';
import PropTypes from 'prop-types';

const App = ({ children, ...props }) => {
  const { seo } = props;

  return (
    <ThemeProvider>
      <Layout>
        <SEO title={seo && seo.title} />
        {children}
      </Layout>
    </ThemeProvider>
  );
};

export default App;

App.propTypes = {
  seo: PropTypes.string,
  children: PropTypes.element.children,
};
