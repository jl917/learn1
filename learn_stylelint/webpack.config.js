const path = require('path')
const wpp_html = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    devServer:{
        contentBase: './dist',
        port:9900
    },
    module: {
        rules: [
            
            {
                test: /\.css$/,
                use: ['style-loader','css-loader', 'postcss-loader'],
              }
        ]
    },
    plugins: [
        new wpp_html({
            title: 'hello'
        })
    ]
}