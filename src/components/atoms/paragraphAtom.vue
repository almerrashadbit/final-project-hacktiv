<template>
  <p class="{{ pClass }}">
    <slot> </slot>
  </p>
</template>

<script setup>
defineProps({
  pClass: {
    type: String,
    required: true
  }
})
</script>
