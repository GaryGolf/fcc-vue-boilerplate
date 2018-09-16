const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const threadLoader = require('thread-loader');

threadLoader.warmup({},[
  'vue-loader', 'css-loader'
]);

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.ts'),
  output: { filename: 'dist/index.js' },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true
  },
  module: {
    rules: [
      { 
        test: /\.vue$/, 
        use: [
          { 
            loader: 'thread-loader',
            options: {
              name: 'vue-loader-pool',
              workers: require('os').cpus().length - 1
            }
          },{
            loader: 'vue-loader',
            options: {
              cssModules: {
                localIdentName: '[path][name]---[local]---[hash:base64:5]',
                camelCase: true
              }
            }
          }
        ]
      },{ 
        test: /\.tsx?$/, 
        use: [
          {
            loader: 'cache-loader'
          },{
            loader: 'thread-loader',
            options: {
              name: 'ts-loader-pool',
              workers: require('os').cpus().length - 1
            }
          },{
            loader: 'ts-loader',
            options: { 
              happyPackMode: true,
              appendTsSuffixTo: [/\.vue$/] 
            },
          }
        ],
        exclude: /node_modules/ 
      },{ 
        test: /\.css$/, 
        use: [ 'thread-loader',  'vue-style-loader', 'css-loader' ], 
        exclude: /node_modules/ 
      }
    ]
  },
  resolve: {
    alias: { vue: 'vue/dist/vue.js' },
    extensions: ['.ts', '.tsx', '.js', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './template.html')
    })
  ]
}

module.exports = config;