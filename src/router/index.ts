import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import TSHome from '../views/TSHome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TSHome',
    component: TSHome
  },
  {
    path: '/jsHome',
    name: 'JSHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/JSHome.vue')
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notes.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
