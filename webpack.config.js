const path = require('path');

const config = {
  entry: path.resolve(__dirname, './src/index.ts'),
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
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './template.html')
    }),
  ]
}

module.exports = config;