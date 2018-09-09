const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, './src/index.ts'),
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'css-loader', exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './template.html')
    }),
  ]
}

module.exports = config;