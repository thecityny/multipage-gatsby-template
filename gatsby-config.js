/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `multipage-gatsby-template`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: process.env.PREFIX,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Sharp Grotesk"],
          urls: [`./${process.env.PREFIX}/fonts/font-files.css`],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
      options: {
        name: "fonts",
        path: "static/fonts/",
      },
      __key: "fonts",
    },
  ],
};
