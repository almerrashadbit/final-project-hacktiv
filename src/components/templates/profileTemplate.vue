<template>
  <header>
    <headerOrganism :header-unordered="headerUnordered" :is-search-bar="isSearchBar" />
  </header>
  <infoListOrganism :imageObject="imageObject" :linkForm="linkForm" :linkList="linkList" />
</template>
<script setup>
import infoListOrganism from '../organisms/infoListOrganism.vue'
import headerOrganism from '../organisms/headerOrganism.vue'

defineProps({
  imageObject: {
    type: Object,
    required: true
  },
  linkList: {
    type: Array,
    required: true
  },

  linkForm: {
    type: Array,
    required: true
  },
  link: {
    type: Array,
    required: true
  },
  headerUnordered: {
    type: Array,
    required: true
  },
  isSearchBar: {
    type: Boolean,
    required: true
  }
})
</script>
