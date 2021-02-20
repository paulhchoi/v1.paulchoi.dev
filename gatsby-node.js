/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Generally you create redirects while creating pages.
exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/qr1',
    toPath: 'https://www.google.com',
    isPermanent: true,
    statusCode: 307,
  });
  createRedirect({
    fromPath: '/qr2',
    toPath: 'https://www.google.com',
    isPermanent: true,
    statusCode: 307,
  });
  createRedirect({
    fromPath: '/qr3',
    toPath: 'https://www.google.com',
    isPermanent: true,
    statusCode: 307,
  });
  createRedirect({
    fromPath: '/qr4',
    toPath: 'https://www.google.com',
    isPermanent: true,
    statusCode: 307,
  });
  // createRedirect({ fromPath: '/url', toPath: '/zn-CH/url', Language: 'zn' })
  // createRedirect({ fromPath: '/not_so-pretty_url', toPath: '/pretty/url', statusCode: 200 })
  // Create pages here
};
