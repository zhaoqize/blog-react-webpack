'use strict';

var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : {
    app:'./app.js',
    vendors:['react','babel-plugin-antd']
  },
  output : {
    path : './assert/',
    filename : 'bundle.[hash].js'
  },
  resolve: {
      extensions: ['', '.js', '.jsx','css']
  },
  module: {
      loaders: [{
        test: /\.jsx?$/, 
        loader: 'babel',
        query: {
            plugins: [["antd", { "style": "css" }]]
          },
        exclude: /node_modules/
      },{
        test: /\.css$/, 
        loader: 'style!css' 
      },{
        test: /\.less$/,
        loader: 'style!css!less'
      },{
        test:/\.(png|jpg)$/,
        loader:'url?limit=555000'
      }
      ]
    },
    plugins:[
      new webpack.ProvidePlugin({
        "React": "react",
        "ReactDOM": "react-dom"
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress : {
        warnings: false
      }
    }),
    new webpack.BannerPlugin((new Date).toLocaleDateString() + ' 打包'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlwebpackPlugin({
      template:'./temp/index.html',
      filename: 'index.html', 
      inject:'body'
    })
    ]
}