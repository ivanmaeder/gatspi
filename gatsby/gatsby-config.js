module.exports = {
  siteMetadata: {
    title: 'Example',
    siteUrl: 'https://www.example.com/',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ['user'],
        singleTypes: [],
      },
    },
  ],
};
