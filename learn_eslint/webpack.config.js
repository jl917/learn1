const path = require('path')
const wpp_html = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
                    formatter: require("eslint/lib/formatters/table"),
                    filePath: 'eslint_checkstyle_[hash].html',
                }
            }
        ]
    },
    plugins: [
        new wpp_html({
            title: 'Development'
          })
    ],
    devServer:{
		contentBase: './dist/',
        compress: true,
        port:'9090'
	},
}