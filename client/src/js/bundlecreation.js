const path = require('path');

module.exports = {
  entry: './src/js/index.js', 
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', 
  devtool: process.env.NODE_ENV === 'production' ? false : 'eval-source-map', 
};