<template>
  <hr :class="hrLineClass" />
</template>

<script setup>
defineProps({
  hrLineClass: {
    type: String,
    default: ''
  }
})
</script>
