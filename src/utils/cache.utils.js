import config from '@/configs/env.config'

export function getToken() {
  return window.localStorage.getItem(config.idTokenKey)
}

export function saveToken(token) {
  window.localStorage.setItem(config.idTokenKey, token)
}

export function destroyToken() {
  window.localStorage.removeItem(config.idTokenKey)
}
