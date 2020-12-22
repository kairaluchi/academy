module.exports = {
  siteMetadata: {
    title: "Kaira Luchi Academy",
    siteUrl: `https://www.kairaluchiacademy.com`,
    description: 'Kaira Luchi Academy',
    author: '@alexebube'
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "256879075",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'Kaira Luchi Academy',
        short_name: 'Kaira Luchi',
        description: 'Kaira Luchi Academy',
        lang: 'en',
        start_url: '/',
        background_color: '#247fe1',
        theme_color: '#247fe1',
        display: 'standalone',
        crossOrigin: 'use-credentials',
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
