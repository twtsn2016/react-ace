var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval',
    devServer: {
        proxy: {
            "/api/*": {
                target: "https://cnodejs.org",
                secure: false
            }
        },
        contentBase: "./",
        colors: true,
        historyApiFallback: true,
        port:8888,
        open:true,
        inline: true,
    },
    entry: {
        main: './src/index.js'
    },
    output: {  //出口  编译后的文件
        path: './dist',
        publicPath: 'dist',
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                // exclude: [nodeModulesPath]用来排除不处理的目录
                exclude: path.resolve(__dirname, 'src/styles'),
                loader: 'style!css?modules!postcss!sass'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/styles'),
                loader: 'style!css'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
         new HtmlWebpackPlugin({ //自动注入build的js文件到index.html中
            title: "",
            filename: '../index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            inject: 'body',
            hash: true,
            chunks: ['main'],
        })
    ],
    postcss: [autoprefixer]
};
