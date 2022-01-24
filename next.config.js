const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  
  options: {
    
  },
});

module.exports = withMDX({
  images: {
    domains: ['images.unsplash.com'],
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
 
});