import Vue from 'vue'
// 样式
import '@/styles/index.less' // global css
// 工具
import router from './router'
import FastClick from 'fastclick'
import VConsole from 'vconsole'
Vue.prototype.$vConsole = vConsole
const vConsole = new VConsole()
FastClick.attach(document.body) // 移除移动端页面点击延迟
new Vue({
  name: 'app',
  router,
  template: '<router-view></router-view>'
}).$mount('#app')
