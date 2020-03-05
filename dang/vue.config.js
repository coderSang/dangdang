const express = require('express')
const app = express()

var homeSwiper = require('./src/db/data/homeSwiper.json')  //本地json文件数据
var detile = require('./src/db/data/detile.json')  //本地json文件数据

var apiRoutes = express.Router();
app.use('/api',apiRoutes)

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        // 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，用75就刚刚好。
        plugins: [
          require("postcss-px2rem")({
            remUnit: 75
          })
        ]
      }
    }
  },
  devServer:{
    before(app) {
      app.get('/api/homeSwiper', (req, res) => {
        res.json({
          errno: 0,   // 这里是你的json内容
          data: homeSwiper
        })
      })
      app.get('/api/detile', (req, res) => {
        res.json({
          errno: 0,   // 这里是你的json内容
          data: detile
        })
      })
    },

    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null      //设置跨域，即将本文件内任何没有匹配到的静态文件，都指向跨域地址
  },
}
