### | 标准模式(CSS1Compat)与怪异模式(BackCompat)
怪异模式是针对于IE的，所以给IE增加了一个document.compatMode属性(该属性在win10下是没有的)
document.compatMode：该属性返回浏览器渲染文档的模式。
1. 5 - 页面在 IE5 模式下展示(怪异模式，且页面没指定!DOCTYPE,也认为是怪异模式)
2. 7 - 页面在 IE7 模式下展示
3. 8 - 页面在 IE8 模式下展示
4. 9 - 页面在 IE9 模式下展示

##### 注意：
怪异模式下可视区域的高度是:document.body.clientWidth
标准模式下可视区域的高度是:document.documentElement.clientHeight


### | 浏览器中获取到达底部的逻辑
(这里忽略浏览器的怪异与标准模式,默认为标准模式)

body正文区域的高度 <= body区域的距离顶部的scrollTop距离 + documentElement(根节点)的页面可是高度

### | 各个高度的获取
谷歌浏览器可见区域高度 document.documentElement.clientHeight

谷歌浏览器body区域高度 document.body.clientHeight = document.body.clientHeight

谷歌浏览器被卷进去的高度 document.body.scrollTop

谷歌浏览器被卷高度+可视区域高度 document.body.scrollHeight

### | 获取元素距离上下左右的距离
getboundingclientrect()获取一个dom距离上下左右屏幕边界的距离

### | 页面中鼠标各个坐标的含义
(待完善...)

### | 开发中提高构建速度的技巧

1.使用exclude去除不需要构建的文件
  
  或者使用include来自己指定构建范围

2.开发中尽量不要使用webpack.optimize.UglifyJsPlugin插件来压缩，因为不怎么需要

  生产环境可以使用

3.使用webpack.optimize.CommonsChunkPlugin抽取公共文件

4.最后的大杀器：DLL & DllReference

注:
开发环境推荐：cheap-module-eval-source-map

生产环境推荐：cheap-module-source-map
