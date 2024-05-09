<template>
  <router-link :to="linkHref" :class="linkClass" :role="linkRole" :aria-current="linkAriaCurrent"
    ><slot></slot
  ></router-link>
</template>

<script setup>
defineProps({
  linkClass: {
    type: String
  },
  linkHref: {
    type: String,
    required: true
  },
  linkRole: {
    type: String
  },
  linkAriaCurrent: {
    type: String
  }
})
</script>
