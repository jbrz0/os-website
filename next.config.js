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
    S3_BUCKET: process.env.S3_BUCKET,
    GA: process.env.GA,
  },

  typescript: {
    // Do not run TypeScript during build
    ignoreBuildErrors: true,
  }
})
