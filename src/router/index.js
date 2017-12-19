import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/demo1.vue'
import Demo2 from '@/components/demo2.vue'
import Demo3 from '@/components/demo3.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {brandName: 'hello', title: 'dsadfafd'}
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: Demo,
      meta: {brandName: 'demo1', title: 'demo1'}
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: Demo2,
      meta: {brandName: 'demo2', title: 'demo2'}
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: Demo3,
      meta: {brandName: 'demo3', title: 'demo3'}
    }
  ]
})
