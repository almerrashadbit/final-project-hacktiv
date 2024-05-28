import config from '@/configs/env.config'

export function getToken(key) {
  return window.localStorage.getItem(key)
}

export function saveToken(key, token) {
  window.localStorage.setItem(key, token)
}

export function destroyToken(key) {
  window.localStorage.removeItem(key)
}

export function clearToken() {
  window.localStorage.clear()
}
