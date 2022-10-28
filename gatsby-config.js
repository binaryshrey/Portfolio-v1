module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
  siteMetadata: {
    title: "Shreyansh Saurabh",
    description: "FullStack Android Developer : Portfolio site",
  },
}
