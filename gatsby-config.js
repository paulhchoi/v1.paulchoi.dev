module.exports = {
  siteMetadata: {
    title: `paulchoi.dev`,
    description: `Playground / sandbox / dev environment`,
    author: `@paulhchoi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paul Choi`,
        short_name: `Paul`,
        start_url: `/`,
        background_color: `#C6F6D5`,
        theme_color: `#C6F6D5`,
        display: `minimal-ui`,
        icon: `src/static/logo/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter`],
      },
    },
    `gatsby-plugin-netlify`,

    'gatsby-plugin-netlify-cache',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
