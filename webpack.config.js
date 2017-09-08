var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {

    // 输入：bundle 的入口文件
    entry: path.resolve(__dirname, 'app/index.jsx'),

    // 输出：bundle好的文件
    output: {
        filename: "bundle.js"
    },

    // import 文件的时候，哪些类型的文件不用加后缀名。直接写名称也会识别
    resolve:{
        extensions:['', '.js','.jsx']
    },

    // 解析器：不同类型的文件用不同的loader
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },  // 匹配所有的js、jsx文件，通过babel-loader将ES6的语法转成ES5
            { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less' }, //匹配所有的
            { test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss' },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
        ]
    },

    postcss: [
        require('autoprefixer') //调用autoprefixer插件，例如 display: flex ;为不同的浏览器加上前缀
    ],

    // 插件：
    plugins: [
        // html 模板插件：将输出文件bundle.js自动注入到index.html中。
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
          url: 'http://localhost:8080'
        }),

        // 可在业务 js 代码中使用 __DEV__ 这个全局变量。
        // 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],

    // 对webpack-dev-server服务的配置：
    // 也可在命令行开启webpack-dev-server --inline --colors --hot --content-base src
    devServer: {
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
}
