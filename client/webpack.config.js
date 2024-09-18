const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: './src/js/index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
   
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'PWA Text Editor',
    }),
    

    new WebpackPwaManifest({
      name: 'PWA Text Editor',
      short_name: 'JATE',
      description: 'A Progressive Web Application Text Editor',
      background_color: '#ffffff',
      theme_color: '#31a9e1',
      start_url: './',
      display: 'standalone',
      icons: [
        {
          src: path.resolve('src/images/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512], 
          destination: path.join('icons'),
        },
      ],
    }),
    
    new InjectManifest({
      swSrc: './src-sw.js', 
      swDest: 'service-worker.js', 
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001, 
    open: true, 
  },
};