<template>
  <label :for="labelFor">
    <slot></slot>
  </label>
</template>

<script setup>
defineProps({
  labelFor: {
    type: String,
    required: true
  }
})
</script>
