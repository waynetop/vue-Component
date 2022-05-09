import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
// import Layout from '@/views/layout/index'
import Blank from '@/views/layout/blank'

// 引入业务子模块
import index from '@/router/modules/dashboard'
Vue.use(Router)
export const constantRouterMap = [{
  path: '/',
  component: Blank,
  redirect: 'index',
  children: index
},
  // 首页
{
  path: '/index',
  component: Blank,
  children: [{
    path: '',
    name: 'index',
    meta: {
      title: 'index'
    },
    component: () =>
        import('@/views/index')
  }]
},

]
export default new Router({
  routes: constantRouterMap
})
