/**
 * Created by tpx on 2017/9/29.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
    // 处理js 文件资源
    entry: {
        //index:'./src/index.js',
        app: './src/index.js',//入口起点
        print: './src/print.js',//入口起点
    },
    //将编译后的代码映射回原始源代码 找错误好找
    devtool: 'inline-source-map',
    //修改配置文件，告诉开发服务器(dev server)，在哪里查找文件
    devServer: {
        contentBase: './dist'
    },
    // 动态入口文件插件
    plugins: [
        new ManifestPlugin(),//记录文件的生成manifest.json
        new CleanWebpackPlugin(['dist']),//清理dist目录文件
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    output: {
        filename: '[name].bundle.js',//根据入口起点名称动态生成 bundle 名称
        path: path.resolve(__dirname, 'dist'), //[name]bundle.js添加到dist目录下
        publicPath: '/' //对应的服务器路径
    },
    module: {
        rules: [
            ///正则，以 .css 结尾的全部文件，都将被提供给 style-loader 和 css-loader
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // 处理图片文件资源
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            //处理字体文件资源
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            // 处理 CSV、TSV 和 XML资源文件
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }

        ]
    }
};
