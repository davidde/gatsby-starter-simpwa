module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter simPWA',
    description: 'Configurable starter that implements the basics for a simple PWA with sidebars',
    author: 'David Deprost',
  },
  plugins: [
    'gatsby-theme-simpwa',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-simpwa',
        short_name: 'simpwa',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
  ],
}
