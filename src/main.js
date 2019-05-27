// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ToastPlugin from '@/plugins/toast-plugin'
import LayerPlugin from '@/plugins/layer-plugin'
import AlertPlugin from '@/plugins/alert-plugin'
import ConfirmPlugin from '@/plugins/confirm-plugin'
import DialogsPlugin from '@/plugins/dialogs-plugin'
import '@/styles/reset.css'
import '@/styles/common.less'
import * as filters from '@/filters/index.js'
Vue.use(ToastPlugin)
Vue.use(LayerPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(DialogsPlugin)
Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 路由跳转公用方法
Vue.prototype.$goto = function (name, query, params) {
  let last = arguments[arguments.length - 1]
  let delay = typeof last === 'number' ? last : 2
  setTimeout(() => {
    this.$router.push({
      name: name,
      query: query || {},
      params: params || {}
    })
  }, delay)
}

Vue.prototype.imgURL = function (path, cate) {
  if (path) {
    return path
  } else {
    return cate === 'avatar' ? '/static/img/avatar.png' : '/static/img/default-pic.png'
  }
}

Vue.prototype.$http = window.http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
