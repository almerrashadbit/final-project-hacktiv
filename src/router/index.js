import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login Page',
      component: () => import('../views/homePage/homePage.vue')
    },
    {
      path: '/register',
      name: 'Register Page',
      component: () => import('../views/registerPage/registerPage.vue')
    },
    {
      path: '/home',
      name: 'Home Page',
      component: () => import('../views/homeePage/homeePage.vue')
    }
  ]
})

export default router
