const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  
  options: {
    
  },
});



module.exports = withMDX({

  images: {
    loader: 'imgix',
    path: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://tphuc.github.io/',
    domains: ['images.unsplash.com'],
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
 
});