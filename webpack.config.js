var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/client',
  ],
  resolve: {
    root: path.resolve(__dirname, 'src/app'),
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      // babel
      {
        test: /\.jsx?$/,
        loaders: ['babel',
      //  'eslint'
      ],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
      // sass
      {
        test: /\.sass$/,
        loader: 'style!css!sass?sourceMap',
      },
      // images
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      // fonts
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        loader: 'file?name=fonts/[name].[ext]',
        include: path.join(__dirname, 'src/fonts/'),
      },
    ],
  },
};
