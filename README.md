# blog-react-webpack

谷歌浏览器可见区域高度 document.documentElement.clientHeight

谷歌浏览器body区域高度 document.body.clientHeight = document.body.clientHeight

谷歌浏览器被卷进去的高度 document.body.scrollTop

谷歌浏览器被卷高度+可视区域高度 document.body.scrollHeight

判断滚动条接近底部 document.body.clientHeight - document.documentElement.clientHeight <= document.body.scrollTop

getboundingclientrect()
