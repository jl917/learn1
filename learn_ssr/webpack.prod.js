const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const wp_clean = require('clean-webpack-plugin')

module.exports = merge(common, {
    output: {
        publicPath: "http://localhost:3000/",
    },
    plugins:[
        new wp_clean(['dist']),
    ],
    mode: 'production',
});