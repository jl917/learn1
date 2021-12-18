const path = require('path')
const webpack = require('webpack')
const wpp_html = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'./dist')
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins:[
        new wpp_html({
            title: 'react测试',
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
}