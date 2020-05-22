module.exports = {
  siteMetadata: {
    title: 'IBM Garage to Go',
    description: 'IBM GSE Assets Landing Page',
    keywords: 'ibm,gse,cloud,terraform, pak, paks, packs, automation, blogs, carbon',
  },
  plugins: ['gatsby-theme-carbon',
  'gatsby-transformer-json',
  
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: 'data',
    path: './src/data'
  },
  resolve: 'gatsby-theme-carbon',
  options: {
    iconPath: './src/images/custom-icon-512.png',
    isSearchEnabled: true,
    repository: {
      baseUrl:
        'https://github.com/ibm-cloud-architecture/ibm-cloud-architecture.github.io/',
      subDirectory: '/',
    },
  },
}
],
pathPrefix: "/",
};
