const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hall\'s App',
      template: 'src/assets/index.html'
    })
  ]
};