const path = require("path")
const wp_html = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: '[name].js'
    },
    resolve: {
        extensions: [".ts",".tsx",".js"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: [
                    'ts-loader'
                ]
            }
        ]
    },
    plugins:[  
        new wp_html({
            title: 'blog'
        })
    ]
}