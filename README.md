# blog-react-webpack

谷歌浏览器可见区域高度 document.documentElement.clientHeight

谷歌浏览器body区域高度 document.body.clientHeight = document.body.clientHeight

谷歌浏览器被卷进去的高度 document.body.scrollTop

谷歌浏览器被卷高度+可视区域高度 document.body.scrollHeight

判断滚动条接近底部 document.body.clientHeight - document.documentElement.clientHeight <= document.body.scrollTop

# 开发中增加构建速度的技巧

1.使用exclude去除不需要构建的文件
  
  或者使用include来自己指定构建范围

2.开发中尽量不要使用webpack.optimize.UglifyJsPlugin插件来压缩，因为不怎么需要

  生产环境可以使用

3.使用webpack.optimize.CommonsChunkPlugin抽取公共文件

4.最后的大杀器：DLL & DllReference

注:
开发环境推荐：cheap-module-eval-source-map

生产环境推荐：cheap-module-source-map
