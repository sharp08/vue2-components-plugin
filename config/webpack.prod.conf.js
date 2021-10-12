const { merge } = require('webpack-merge');
const path = require("path")
const base = require('./webpack.base.conf.js')

module.exports = merge(base, {
    mode: "production",
    entry: './src/components/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'myui.js', //输出文件名
        library: 'myui', // 指定的就是你使用require时的模块名
        libraryTarget: 'umd', // 指定输出格式， UMD 同时支持两种执行环境：node环境、浏览器环境。
        umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    },
})