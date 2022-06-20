const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/bundle.js', 
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html", inject: false
    }),
  ],
  module: {
    rules: [
      // …
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    port: 3010,
  }
};