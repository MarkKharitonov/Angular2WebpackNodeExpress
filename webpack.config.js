const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 4000;

module.exports = {
    cache: true,
    devtool: 'source-map',

    entry: {
        polyfills: './src/client/polyfills',
        vendor: './src/client/vendor',
        main: './src/client/main'
    },

    output: {
        path: path.join(__dirname, 'dist/client'),
        filename: '[name].js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts'},
            {test: /\.(css|html)$/, loader: 'raw', include: path.join(__dirname, './src/client/app')},
            {test: /\.css$/, loader: 'style!css', exclude: path.join(__dirname, './src/client/app')},
            {test: /\.(jpg|png)$/, loader: 'url?limit=25000', include: /\/assets\//}
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills'],
            minChunks: Infinity
        }),

        new HtmlWebpackPlugin({
            template: 'src/client/index.html'
        })
    ],

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    devServer: {
        inline: true,
        progress: true,
        port: port,
        proxy: {
            '/api*': {
                target: 'http://localhost:' + (port - 1)
            }
        },
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
};
