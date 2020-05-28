module.exports = {
  siteMetadata: {
    title: 'IBM Garage to Go',
    description: 'IBM GSE Assets Landing Page',
    keywords: 'ibm,gse,cloud,terraform, pak, paks, packs, automation, blogs, carbon',
  },
  pathPrefix: "/",
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/custom-icon-512.png',
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://github.com/ibm-cloud-architecture/ibm-cloud-architecture.github.io',
          subDirectory: '/',
          branch: 'master-content',
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: './src/data'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149377589-2",
        head: true
      }
    }
  ]
};
