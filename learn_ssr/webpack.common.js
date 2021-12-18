const path = require("path")
const wp_html = require('html-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
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
        new wp_html({
            title: 'blog',
            filename: 'index.html',
            template: './src/template/index.html',
        })
        
    ]
}