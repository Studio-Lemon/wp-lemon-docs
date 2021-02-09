module.exports = {
  pathPrefix: "/wp-lemon-docs",
  siteMetadata: {
    siteTitle: `WP_Lemon Lemon Docs`,
    defaultTitle: `WP_Lemon Docs`,
    siteTitleShort: `RWP Lemon Docs`,
    siteDescription: `Your go-to theme for creating good looking and lean websites`,
    siteUrl: `https://studio-lemon.github.io/wp-lemon-docs/`,
    siteAuthor: `@rocketseat`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#f7d600`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/Studio-Lemon/wp-lemon-docs`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WP_Lemon documentation`,
        short_name: `WP_Lemon docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
