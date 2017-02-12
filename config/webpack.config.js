const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'babel-polyfill': 'babel-polyfill',
    app: ['./src/main.js'],
    vendor: ['react', 'react-dom', 'react-router', 'redux', 'redux-saga'],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist/'),
    filename: 'static/js/[name].js',
    chunkFilename: 'static/chunk/[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.less'],
    alias: {
      asserts: path.join(__dirname, '../src/asserts'),
      style: path.join(__dirname, '../src/style'),
      src: path.join(__dirname, '../src')
    }
  },
  plugins: [],
  stats: {
    children: false
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader?sourceMap'
      },
      // css
      {
        test: /\.css$/,
        loader: 'style!css',
        include: /node_modules/
      },
      // css module
      {
        test: /\.(css)$/,
        loader: ExtractTextPlugin.extract('style?sourceMap', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        exclude: /node_modules/
      },
      // less
      {
        test: /\.(less)$/,
        loader: ExtractTextPlugin.extract('style?sourceMap', 'css?sourceMap!less?sourceMap!!less?sourceMap'),
        include: /node_modules/
      },
      // less module
      {
        test: /\.(less)$/,
        loader: ExtractTextPlugin.extract('style?sourceMap', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less?sourceMap'),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=10240'
      }
    ]
  }
};
