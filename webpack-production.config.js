var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    devtool: "sourcemap",

    entry: {
        app: './src/js/client.jsx',
        vendor: [
            'react',
            'react-dom',
            'react-router'
        ]
    },

    resolve: {
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
                test: /\.jsx$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            // compress images
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
               loaders: [
                   'file-loader?name=[path][name].[ext]&context=./src',
                   'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
               ]
           },
           // extract css
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                loader: 'file?name=fonts/[name].[ext]',
                exclude: /img/
              }
        ]
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
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // uglify js
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: true
            }
        }),
        // split vendor
        new webpack.optimize.CommonsChunkPlugin("vendor", "libs-[chunkhash].js")
    ]
}
