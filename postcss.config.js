// PostCSS configuration
module.exports = {
  plugins: {
    // Import other CSS files into your CSS
    'postcss-import': {},
    
    // Enable nesting for CSS (like SCSS)
    'tailwindcss/nesting': 'postcss-nesting',
    
    // Tailwind CSS
    tailwindcss: {},
    
    // Automatically add vendor prefixes to CSS rules
    autoprefixer: {
      flexbox: 'no-2009',
      grid: 'autoplace',
    },
    
    // Future CSS features
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'media-query-ranges': true,
        'custom-media-queries': true,
      },
    },
    
    // Minify CSS in production
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
