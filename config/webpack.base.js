const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    // + 提取公共模块配置
    optimization: {
        splitChunks: {
            chunks: 'all'	// 提取所有文件的共同模块
        }
    },
    // 入口
    entry: {
        index:"./src/index.js",
        about:"./src/about.js"
    },

    // 输出
    output: {
        filename: "js/[name].[hash].bundle.js",
        path: path.resolve(__dirname, "../dist")  // 注意此处输出目录是父级文件夹
    },

    // 模块加载器
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            publicPath: "./images/",
                            outputPath: "images"
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        // 提取css样式到单独文件
        new ExtractTextPlugin("style/style2.css"),

        // 每次构建前清除dist目录
        new CleanWebpackPlugin(),

        // 自动生成index.html到dist
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
    ]
};