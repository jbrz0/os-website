const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  devIndicators: {
    // remove lightning bolt icon
    autoPrerender: false,
  },

  // Re-map environment vars to work with next
  env: {
    AUTH_SECRET: process.env.AUTH_SECRET,
  }
})
