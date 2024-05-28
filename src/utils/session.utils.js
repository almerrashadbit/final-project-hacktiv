export function getSessionKey(key) {
  return window.sessionStorage.getItem(key)
}

export function setSessionKey(key, value) {
  return window.sessionStorage.setItem(key, value)
}

export function deleteSessionKey(key) {
  return window.sessionStorage.removeItem(key)
}

export function clearSessionKey() {
  return window.sessionStorage.clear()
}
