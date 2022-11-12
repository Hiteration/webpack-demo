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
  ],
  module: {
    rules: [
      {
        test: /\.png$/i,
        use: ['file-loader']
      },
      {
        test: /\.styl$/i,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
      }
    ]
  }
};