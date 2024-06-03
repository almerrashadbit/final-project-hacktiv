import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { POST } from '@/utils/http.utils'
import { getToken, saveToken, destroyToken, clearToken } from '@/utils/cache.utils'
import config from '@/configs/env.config'
import { modalNotSuccess, modalSuccess } from '@/helpers/modal.helper'
import { clearSessionKey, getSessionKey, setSessionKey } from '@/utils/session.utils'

export const authStore = defineStore('auth', () => {
  const tokenFromAuth = ref('');
  const tokenFromCache = ref('');
  const rememberMe = ref('');
  const cacheChecked = ref(false);

  const tokenGetter = computed(() => {
    return tokenFromCache.value ? tokenFromCache.value : tokenFromAuth.value
  });
  const cacheCheckedGetter = computed(() => {
    return cacheChecked.value
  });

  const rememberMeGetter = computed(() => {
    return rememberMe.value
  })

  async function login(body, rememberMe) {
    try {
      const res = await POST(config.baseURL, 'LOGIN', body)
      saveToken(config.rememberMeKey, rememberMe)
      if (res.status === 200) {
        tokenFromAuth.value = res.data.token
        saveToken(config.idTokenKey, tokenFromAuth.value)
        return modalSuccess('Login Success', { path: '/home', query: { pageId: 1 } })
      }
      return modalNotSuccess(res.message)
    } catch (error) {
      return modalNotSuccess(error.message)
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
    console.log(tokenCheck, 'masuk store')
    console.log(rememberMeCheck, 'masuk store')

    if (!tokenCheck) {
      return false
    }
    tokenFromCache.value = tokenCheck
    rememberMe.value = rememberMeCheck

    return true
  }

  function setSession() {
    console.log(getToken(config.rememberMeKey))
    console.log(getSessionKey(config.authSessionKey))
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
    cacheCheckedGetter,
    tokenGetter,
    rememberMeGetter
  }
})
