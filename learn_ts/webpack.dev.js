const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    
    devServer: {
        contentBase: './dist',
        disableHostCheck: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});