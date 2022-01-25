const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  
  options: {
    
  },
});



module.exports = withMDX({

  images: {
    loader: 'imgix',
    // path: 'http://localhost:3000/',
    path: 'https://tphuc.github.io',
    domains: ['images.unsplash.com'],
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
 
});