import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Mac from '@/components/pages/Mac'
import Music from '@/components/pages/Music'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mac',
      name: 'Mac',
      component: Mac
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    }
  ]
})
