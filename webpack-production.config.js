var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var packageJson = require('./package.json');

function getVendorModules(){
  var dependencies = packageJson.dependencies;
  var list = [];
  Object.keys(dependencies).forEach(function(el){
    list.push(el)
  });
  return list;
}

module.exports = {
  devtool: "cheap-source-map",

  entry: {
      app: './src/client.jsx',
      vendor: getVendorModules()
  },

  resolve: {
      root: [path.resolve(__dirname, 'src/app'), path.resolve(__dirname, 'src')],
      extensions: ['', '.js', '.jsx']
  },

  output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: '[name]-[chunkhash].js',
      publicPath: '/'
  },

  module: {
    loaders: [
      // babelify
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      // compress images
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader?name=[path][name].[ext]&context=./src',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ],
      },
     // extract css
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        loader: 'file?name=fonts/[name].[ext]',
        include: path.join(__dirname, 'src/fonts/'),
      },
    ],
  },

  plugins: [
    // extract css,
    new ExtractTextPlugin('[name]-[chunkhash].css'),
    // index.html generation
    new HtmlWebpackPlugin({
      title: 'React boilerplate',
      filename: 'index.html',
      template: 'src/index.jst',
    }),
    // env definement
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production'),
      },
    }),
    // uglify js
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: true,
      },
      sourceMap: false,
    }),
    // split vendor
    new webpack.optimize.CommonsChunkPlugin("vendor", "libs-[chunkhash].js"),
  ],
};
