<script setup>
import { RouterView } from 'vue-router'

import { authStore } from './stores/authStores'
import { onBeforeUnmount, onMounted, onUnmounted } from 'vue'
import { clearToken } from './utils/cache.utils'

onMounted(() => {
  const useAuthStore = authStore()

  useAuthStore.setSession()
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
