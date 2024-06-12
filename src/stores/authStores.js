import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { POST } from '@/utils/http.utils'
import { getToken, saveToken, clearToken } from '@/utils/cache.utils'
import config from '@/configs/env.config'
import { modalNotSuccess, modalSuccess } from '@/helpers/modal.helper'
import { clearSessionKey, getSessionKey, setSessionKey } from '@/utils/session.utils'

export const authStore = defineStore('auth', () => {
  const tokenFromAuth = ref('')
  const tokenFromCache = ref('')
  const rememberMe = ref('')
  const cacheChecked = ref(false)

  const tokenGetter = computed(() => {
    return tokenFromCache.value ? tokenFromCache.value : tokenFromAuth.value
  })
  const cacheCheckedGetter = computed(() => {
    return cacheChecked.value
  })
  const rememberMeGetter = computed(() => {
    return rememberMe.value
  })

  async function login(body, rememberMe) {
    try {
      const res = await POST(config.baseURL, 'LOGIN', body)
      console.log(res)
      saveToken(config.rememberMeKey, rememberMe)
      if (res.status === 200) {
        tokenFromAuth.value = res.data.token
        saveToken(config.idTokenKey, tokenFromAuth.value)
        return modalSuccess('Login Success', { path: '/home', query: { pageId: 1 } })
      }
      return modalNotSuccess(res.statusText)
    } catch (error) {
      return modalNotSuccess(error.response.data.error)
    }
  }

  async function register(body) {
    try {
      const res = await POST(config.baseURL, 'REGISTER', body)
      console.log(res)
      if (res.status === 201) {
        return modalSuccess('Register success, please login again', { path: '/' })
      }
      return modalNotSuccess(res.response.data)
    } catch (error) {
      return modalNotSuccess(error.response.data.error)
    }
  }

  function logout() {
    clearToken()
    clearSessionKey()
    location.reload()
  }

  function checkCache() {
    const tokenCheck = getToken(config.idTokenKey)
    const rememberMeCheck = getToken(config.rememberMeKey)
    cacheChecked.value = true

    if (!tokenCheck) {
      return false
    }
    tokenFromCache.value = tokenCheck
    rememberMe.value = rememberMeCheck

    return true
  }

  function setSession() {
    if (getToken(config.rememberMeKey) === 'undefined' && !getSessionKey(config.authSessionKey)) {
      clearToken()
      clearSessionKey()
    }
    setSessionKey(config.authSessionKey, true)
  }

  return {
    checkCache,
    login,
    logout,
    setSession,
    register,
    cacheCheckedGetter,
    tokenGetter,
    rememberMeGetter
  }
})
