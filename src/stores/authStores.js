import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { POST } from '@/utils/http.utils'
import { getToken, saveToken } from '@/utils/cache.utils'

import config from '@/configs/env.config'
import { modalNotSuccess, modalSuccess } from '@/utils/modal.utils'

export const authStore = defineStore('auth', () => {
  const tokenFromAuth = ref('')
  const tokenFromCache = ref('')
  const cacheChecked = ref(false)
  const tokenVerified = ref(false)

  const tokenGetter = computed(() => {
    return tokenFromCache.value ? tokenFromCache.value : tokenFromAuth.value
  })
  const cacheCheckedGetter = computed(() => {
    return cacheChecked.value
  })
  const tokenVerifiedGetter = computed(() => {
    return tokenVerified.value
  })

  async function login(body) {
    try {
      const res = await POST(config.baseURL, 'LOGIN', body);
      if(res.status === 200){
        tokenFromAuth.value = res.data.token;
        saveToken(tokenFromAuth.value);
        tokenVerified.value = true;
        return modalSuccess('Login Success', '/home')
      }
      return modalNotSuccess(res.message);
    } catch (error) {
      return modalNotSuccess(error);
    }
  }

  function checkCache() {
    const tokenCheck = getToken()
    cacheChecked.value = true
    console.log(tokenCheck, 'masuk store')
    if (!tokenCheck) {
      return false
    }
    tokenFromCache.value = tokenCheck

    return true
  }

  return { checkCache, login, cacheCheckedGetter, tokenGetter }
})
