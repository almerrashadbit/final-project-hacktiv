<template>
  <router-link :to="linkHref" :class="linkClass" :role="linkRole" :aria-current="linkAriaCurrent" :data-bs-dismiss="dataBsDismiss"
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
  },
  dataBsDismiss: {
    type: String
  },
})
</script>
