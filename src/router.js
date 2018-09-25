import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import user from './views/user.vue'
// import mainScss from './assets/main.scss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/register.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "about" */ './views/user.vue')
    },
    {
      path: '/user/template1',
      name: 'template1',
      component: () => import(/* webpackChunkName: "about" */ './components/templates/template1.vue')
    }
  ]
})
