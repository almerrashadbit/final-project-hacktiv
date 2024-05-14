import { createRouter, createWebHistory } from 'vue-router'
import { authStore } from '@/stores/authStores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login Page',
      component: () => import('../views/loginPage.vue'),
      meta: { authPage: true }
    },
    {
      path: '/register',
      name: 'Register Page',
      component: () => import('../views/registerPage.vue'),
      meta: { authPage: true }
    },
    {
      path: '/home',
      name: 'Home Page',
      component: () => import('../views/homeePage/homeePage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'Profile Page',
      component: () => import('../views/profilePage/profilePage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/history',
      name: 'History Page',
      component: () => import('../views/historyPage/historyPage.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to, from) => {
  const useAuthStore = authStore()

  const res = () => {
    if (!useAuthStore.cacheCheckedGetter) {
      const res = useAuthStore.checkCache()
      return res
    }
    return true;
  }

  if (to.meta.requiresAuth && !res()) {
    return {
      path: '/'
    }
  } else if (!to.meta.requiresAuth && res()) {
    return {
      path: '/home'
    }
  }
})

export default router
