import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('views/home.vue')
  },
  {
    path: '/calendar',
    component: () => import('views/calendar/calendar.vue')
  },
  {
    path: '/lock',
    component: () => import('views/lock/lock.vue')
  },
  {
    path: '/account',
    component: () => import('views/calendar/calendar.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
