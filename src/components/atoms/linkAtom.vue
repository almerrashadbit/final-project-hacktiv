<template>
  <a :class="linkClass" :href="href" :role="role"><slot></slot></a>
</template>

<script setup>
defineProps({
  linkClass: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: ''
  }
})
</script>
