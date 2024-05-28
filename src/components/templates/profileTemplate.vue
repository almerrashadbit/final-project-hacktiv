<template>
  <header>
    <headerOrganism :header-unordered="headerUnordered" :is-search-bar="false" />
  </header>
  <infoListOrganism :info-img="infoImg" :info-link="infoLink" :info-list="infoList" />
</template>
<script setup>
import infoListOrganism from '../organisms/infoListOrganism.vue'
import headerOrganism from '../organisms/headerOrganism.vue'

defineProps({
  infoImg: {
    type: Object,
    required: true
  },
  infoList: {
    type: Array,
    required: true
  },

  infoLink: {
    type: Array,
    required: true
  },
  headerUnordered: {
    type: Array,
    required: true
  }
})
</script>
