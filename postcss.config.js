const path = require('path');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-assets')({
      basePath: path.join(__dirname, 'src')
    })
  ]
};
