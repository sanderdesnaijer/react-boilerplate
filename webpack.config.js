var webpack = require('webpack');

module.exports = {
    debug: false,

    // input
    context: __dirname + '/src',
    entry: {
        javasript: './js/app.jsx',
        html: './index.html',
        // vendor: ['react','react-dom']
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    // output
    output: {
        path: 'dist',
        filename: 'app.js'
    },

    // modules
    module: {
        loaders: [{
                test: /\.jsx$/,
                loaders: [
                    'react-hot',
                    'babel',
                    'eslint-loader'
                ],
                exclude: /node_modules/
            },

            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env':{
        //       'NODE_ENV': JSON.stringify('production')
        //     }
        //   }),
        // new webpack.optimize.UglifyJsPlugin({
        // minimize: true,
        //     compress:{
        //       warnings: true
        //     }
        // }),
        // new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"libs.js")
    ]
}
