const path = require("path")
const wp_html = require('html-webpack-plugin')
const wp_clean = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new wp_clean(['dist']),
        new wp_html({
            title: 'todo??'
        })
        
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot:true
    }
}