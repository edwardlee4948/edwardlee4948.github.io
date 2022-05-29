const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Eunmin Lee`,
    description: `Eunmin Lee's personal blog`,
    author: `Eunmin Lee`,
    siteUrl: `https://eunminlee.github.io`, // No trailing slash allowed.
    social: {
      twitter: `eelvlee`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-L1YBSE1B75`,
      },
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: path.join(__dirname, `content`, `blog`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, `src`, `pages`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-embed-video`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 720,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-external-links`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eunmin Lee`,
        short_name: `Eunmin Lee`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffa7c4`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
  ],
}
