import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home'
import Questions from '@/components/views/Questions'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/questions',
      name: 'questions',
      component: Questions
    }
  ]
})
