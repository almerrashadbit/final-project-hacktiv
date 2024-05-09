<template>
  <profileTemplate
    :imageObject="profilePageConfig.imageObject"
    :linkForm="profilePageConfig.linkForm"
    :linkList="profilePageConfig.linkList"
    :headerUnordered="profilePageConfig.headerUnordered"
    :isSearchBar="profilePageConfig.isSearchBar"
  ></profileTemplate>
</template>

<script setup>
import profileTemplate from '../../components/templates/profileTemplate.vue'
import profilePageConfig from './profilePageConfig'
</script>
