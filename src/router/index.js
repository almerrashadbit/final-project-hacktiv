import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login Page',
      component: () => import('../views/loginPage.vue')
    },
    {
      path: '/register',
      name: 'Register Page',
      component: () => import('../views/registerPage.vue')
    },
    {
      path: '/home',
      name: 'Home Page',
      component: () => import('../views/homeePage/homeePage.vue')
    },
    {
      path: '/profile',
      name: 'Profile Page',
      component: () => import('../views/profilePage/profilePage.vue')
    },
    {
      path: '/history',
      name: 'History Page',
      component: () => import('../views/historyPage/historyPage.vue')
    }
  ]
})

export default router
