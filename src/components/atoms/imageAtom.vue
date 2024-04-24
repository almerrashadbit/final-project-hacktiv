<template>
  <img :src="imgSrc" :class="imgClass" :alt="imgAlt" />
</template>

<script setup>
defineProps({
  imgSrc: {
    type: String,
    requred: true
  },
  imgClass: {
    type: String,
    requred: true
  },
  imgAlt: {
    type: String,
    requred: true
  }
})
</script>
