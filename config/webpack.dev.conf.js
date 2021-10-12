const { merge } = require('webpack-merge');
// const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.conf.js')

module.exports = merge(base, {
    mode: "development",
    entry: './src/main.js',
    target: "web",    //  webpack5 认为只有 web 才有必要热更新，因此想实现热更新必须使用该项并配合 liveReload
    devServer: {
        port: 9990,
        liveReload: true,// webpack5 使用该配置项，配合 target: 'web' 并且禁用 hot 配置项才能生效
        open: false,
        host: "127.0.0.1",
        compress: true,
        proxy: {
            '/api': {
                //  http://localhost:9990/api/users => https://api.github.com/api/users
                target: "https://api.github.com",
                //  http://localhost:9990/api/users => https://api.github.com/users
                pathRewrite: {
                    '^/api': ""
                },
                changeOrigin: true  //  如果不配置这一项，则是使用 localhost 作为请求 github 的主机名，配置了就变成 api.github.com 作为主机名
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',  //  使用的模板位置
            filename: 'index.html',    //  生成的文件名称
            title: "aabbcc"
        }),
    ]
})