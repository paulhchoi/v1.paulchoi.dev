module.exports = {
  siteMetadata: {
    title: `paulchoi.dev`,
    description: `Playground / sandbox / dev environment / throw-and-see-if-it-sticks.`,
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
        icon: `src/images/sq_2018_audio_lrg.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-netlify-cache',
  ],
};
