import React from 'react';
import SEO from '../components/seo';
import App from '../components/app';
import PaginateNavigate from '../components/PaginateNavigate';

const NotFoundPage = () => (
  <App>
    <SEO title="404: Not found" />
    <h2 className="mb-6 font-semibold text-2xl">🔍 Page not found!</h2>

    <PaginateNavigate nextText={'Home'} nextLink={'/'} />
  </App>
);

export default NotFoundPage;
