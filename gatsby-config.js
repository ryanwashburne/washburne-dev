const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')

const fullConfig = resolveConfig(tailwindConfig)
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Ryan Washburne`,
    description: `Personal site for Ryan Washburne`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-107484926-3`,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `washburne-dev`,
        short_name: `washburne-dev`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.primary.default,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Kumbh Sans:regular,bold`],
        },
      },
    },
    {
      resolve: `gatsby-source-google-docs`,
      options: {
        folders: [process.env.GOOGLE_DRIVE_FOLDER_ID],
        ignoredFolders: [`drafts`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 590,
            },
          },
          `gatsby-remark-external-links`,
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-duolingo`,
    //   options: {
    //     username: `ryan51574`,
    //     identifier: process.env.DUOLINGO_IDENTIFIER,
    //     password: process.env.DUOLINGO_PASSWORD,
    //   },
    // },
    `gatsby-plugin-offline`,
  ],
}
