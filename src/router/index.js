import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const home = resolve => require(['../page/index'], resolve)
const loading = resolve => require(['../components/loading'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/HelloWorld'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/load',
      name: 'load',
      component: loading
    },
    {
      path: '/HelloWorld',
      component: HelloWorld,
      meta: { title: 'hello sword' }
    }
  ]
})
