var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "eval",

    // input
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/client.jsx'
    ],
    resolve: {
        root: path.resolve(__dirname, 'src/app'),
        extensions: ['', '.js', '.jsx']
    },

    // output
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: '[name].js',
        publicPath: '/'
    },

    // modules
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loaders: [
                  // 'react-hot',
                    'babel',
                  'eslint-loader'
                ],
                exclude: /node_modules/
            }, {
                test: /\.sass$/,
                loader: 'style!css!sass?sourceMap'
            }, {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader?name=[path][name].[ext]&context=./src'
            }, {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                loader: 'file?name=fonts/[name].[ext]',
                exclude: /img/
            }

        ]
    },

    plugins: [
        // index.html generation
        new HtmlWebpackPlugin({
            title: 'React boilerplate',
            filename: 'index.html',
            template: 'src/index.jst',
        })
    ]
}
