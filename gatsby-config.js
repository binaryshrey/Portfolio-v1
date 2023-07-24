module.exports = {
  plugins: [{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Shreyansh Saurabh',
        short_name: 'Shreyansh Saurabh',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: './logo.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
    }
  ],
  siteMetadata: {
    title: "Shreyansh Saurabh",
    description: "FullStack Android Developer : Portfolio site",
    image: `/logo.webp`,
    siteUrl: `https://shreyansh.dev/`,
  },
}