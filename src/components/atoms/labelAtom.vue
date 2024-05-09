<template>
  <label :for="labelFor" :class="labelClass">
    <slot></slot>
  </label>
</template>

<script setup>
defineProps({
  labelFor: {
    type: String,
    required: true
  },
  labelClass: {
    type: String
  }
})
</script>
