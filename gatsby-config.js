require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Paul Choi`,
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
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: `${process.env.GATSBY_UMAMI_ID}`,
        srcUrl: 'https://pchoi-umami-analytics.herokuapp.com/umami.js',
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
  ],
};
