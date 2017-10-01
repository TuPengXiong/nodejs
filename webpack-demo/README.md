# 创建项目

## 创建目录
```$xslt
 mkdir webpack-demo && cd webpack-demo
```
## 项目初始化
```$xslt
npm init -y
```
## 安装webpack
```$xslt
npm install --save-dev webpack
```

## 加载依赖
```$xslt
## js文件引入依赖加载
npm install --save lodash
## css文件引入依赖加载
npm install --save-dev style-loader css-loader
## 图片文件和字体等文件资源依赖加载
npm install --save-dev file-loader
npm install --save-dev url-loader
## 导入 CSV、TSV 和 XML资源依赖加载
 npm install --save-dev csv-loader 
 npm install --save-dev xml-loader
 ## 动态入口文件插件
 npm install --save-dev html-webpack-plugin
 ## 清理dist目标文件
 npm install clean-webpack-plugin --save-dev
 
 ## 记录文件的生成
 npm install --save-dev webpack-manifest-plugin
 
 ## 提供了一个简单的 web 服务器，并且能够实时重新加载
 npm install --save-dev webpack-dev-server
 
 ## node开启服务
 npm install --save-dev express webpack-dev-middleware
```