const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        polyfill: '@babel/polyfill',
        mom: './src/index.js',
        test: './test/test.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: /(node_modules)|(dist)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'MOM JS',
            filename: 'index.html',
            template: 'public/index.html',
            favicon: false
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};