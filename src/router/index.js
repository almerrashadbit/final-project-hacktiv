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
      meta: { requiresAuth: true },
      children: [
        {
          path: 'doctor/:id',
          name: 'Doctor Profile',
          component: () => import('../views/profilePage/profilePage.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/history',
      name: 'History Page',
      component: () => import('../views/historyPage/historyPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/appointment',
      name: 'Appointment Page',
      component: () => import('../views/appointmentPage.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'edit/:id',
          name: 'Edit Appointment Page',
          component: () => import('../views/profilePage/profilePage.vue'),
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  const useAuthStore = authStore()

  const res = () => {
    if (!useAuthStore.cacheCheckedGetter) {
      const res = useAuthStore.checkCache()
      return res
    }
    return useAuthStore.tokenGetter
  }

  if (to.meta.requiresAuth && !res()) {
    return {
      path: '/'
    }
  } else if (!to.meta.requiresAuth && res()) {
    return {
      path: '/home',
      query: {
        pageId: 1
      }
    }
  }
})

export default router
