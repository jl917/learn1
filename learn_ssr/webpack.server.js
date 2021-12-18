const path = require("path")
const wp_clean = require('clean-webpack-plugin')

module.exports = {
    entry: './src/server/index.js',
    output: {
        path: path.resolve(__dirname,"server_dist"),
        filename: 'server.js'
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
        new wp_clean(['server_dist']),
    ],
    mode: 'production',
    target: 'node'
}