const webpack = require('webpack');
const config = require('./webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

config.debug = true;
config.devtool = 'source-map';
config.plugins = (config.plugins || []).concat([
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('static/css/[name].css'),
  new HtmlWebpackPlugin({
    title: '[DEV]title',
    filename: 'index.html',
    template: 'src/index.html',
    inject: false
  })
]);

config.module.loaders[0] = {
  test: /\.jsx?/,
  exclude: /node_modules/,
  loaders: ['babel-loader']
};

config.devServer = {
  contentBase: './dist',
  host: '0.0.0.0',
  port: 3000,
  hot: true,
  inline: true,
  stats: {
    colors: true,
    children: false,
    chunks: false
  },
  historyApiFallback: true,
  proxy: {

  },
};

module.exports = config;
