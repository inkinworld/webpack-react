const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

config.output.publicPath = '';

config.plugins = (config.plugins || []).concat([
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '../'),
    verbose: true,
    dry: false,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    chunks: ['app', 'vendor'],
  }),
  new ExtractTextPlugin('static/css/[name].css'),
  new HtmlWebpackPlugin({
    title: 'title',
    filename: 'index.html',
    template: 'src/index.html',
    inject: false
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
]);

module.exports = config;
