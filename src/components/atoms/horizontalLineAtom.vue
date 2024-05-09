<template>
  <hr :class="hrClass" />
</template>

<script setup>
defineProps({
  hrClass: {
    type: String
  }
})
</script>
