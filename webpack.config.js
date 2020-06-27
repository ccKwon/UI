let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口文件
    entry: './src/index.js',
    output: {
        // 输出文件名称
        filename: 'bundle.js',
        // 输出路径
        // 绝对路径 名称       resolve整合 _dirname 和 dist
        path: path.resolve(__dirname, 'dist')
    },
    // 开发模式
    // production   生产模式
    mode: 'development',


    // loader的配置
    module: {
        // 对某个格式的文件进行转换处理
        rules: [
            {
                // \:转义 默认.是匹配全部   $:以..结束
                // 匹配后缀名为CSS的文件
                test: /\.css$/,
                use: [
                    // use数组里中的loader的转换顺序是由下到上  逆序执行
                    // 将js的样式内容插入到style标签中
                    "style-loader",
                    // 将css文件转换为js
                    'css-loader'
                ]
            },
            {
                // 匹配图片文件
                test: /\.(jpg|png|gif)/,
                loader: 'url-loader',
                // 图片小于8kb base64处理
                options: {
                    // 设置大小
                    limit: 8 * 1024,
                    // url-loader的ES6模块化解析
                    esModule: false,
                    // [hash:10] 取图片哈希的前十位
                    // [ext]    取图片的扩展名
                    name: '[hash:10].[ext]'
                }
            },
            {
                test: /\.hrml$/,
                loader: 'html-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [require('@babel/plugin-transform-object-rest-spread')]
                    }
                }
            }
        ]
    },

    // plugins插件配置
    plugins: [
        new HtmlWebpackPlugin({
            // index.html文件位置
            template: './src/index.html'
        })
    ],

    // 
    devServer: {
        // 项目构建路径
        contentBase: path.resolve(__dirname, 'dist'),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 8085,
        // 自动打开浏览器
        open: true

    }
}