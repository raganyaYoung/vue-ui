const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
// 模块导入
module.exports = {

  // 入口文件地址，不需要写完，会自动查找
  entry: './src/main',
  // 输出
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  // 服务器配置相关，自动刷新!
  devServer: {
    port: 4040,
    historyApiFallback: true,
    hot: false,
    inline: true
    // grogress: true,
  },
  // 加载器
  module: {
    // 加载器
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'url-loader?limit=8192&name=/[hash].[ext]'
      }
    ]
  },
  // .vue的配置。需要单独出来配置，其实没什么必要--因为我删了也没保错，不过这里就留这把，因为官网文档里是可以有单独的配置的。
  vue: {
    loaders: {
      css: 'style!css!autoprefixer'
    }
  },
  // 转化成es5的语法
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },
  resolve: {
    // require时省略的扩展名，如：require('module') 不需要module.js
    extensions: ['', '.js', '.vue'],
    // 别名，可以直接使用别名来代表设定的路径以及其他
    // alias: {
    //   filter: path.join(__dirname, './src/filters'),
    //   components: path.join(__dirname, './src/components')
    // }
  },
  // 开启source-map，webpack有多种source-map，在官网文档可以查到
  // devtool: 'eval-source-map'
};