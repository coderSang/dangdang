import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false

Vue.use(BaiduMap,{
  al:"GZq6GIuYKYYEAdZnxNGjAYqLB8YzQvon"
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
