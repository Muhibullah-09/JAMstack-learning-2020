module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pzf02rirou4r`,
        accessToken: `dadqh8ylnscWzAMYLwHTxSOGtqZGoLlwSrGRiqGhXbM`,
      },
    },
  ],
};