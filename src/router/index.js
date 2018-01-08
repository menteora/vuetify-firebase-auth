import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from '@/router/auth-guard'
// pages
import HelloWorld from '@/pages/HelloWorld'
import Home from '@/pages/Home'
import Signin from '@/pages/User/Signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: AuthGuard
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})
