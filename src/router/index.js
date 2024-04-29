import { createRouter, createWebHistory } from 'vue-router'
import vMain from '../views/v-main.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: vMain
  },
  
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/v-order.vue')
  },
  
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/v-settings.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
