const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: path.join(__dirname, './app/main.js'),
  output: {
    publicPath:'/public',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    hot : true 
  },
  module:{//这个节点用于配置第三方模块
    rules:[//所有第三方模块的匹配规则
      {test: /\.css$/,use: ['style-loader', 'css-loader']},//配置要处理的文件类型
      {test: /\.scss$/,use: ['style-loader', 'css-loader','sass-loader']},
      {test: /\.less$/,use: ['style-loader', 'css-loader','less-loader']}
    ]
  },
  plugins: [
    //热更新插件
    new webpack.HotModuleReplacementPlugin()
  ]
}