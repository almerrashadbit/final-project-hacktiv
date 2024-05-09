<template>
  <headerTemplate
    :headerUnordered="homeePage.headerUnordered"
    :isSearchBar="homeePage.isSearchBar"
    :cardList="cardList"
    :unorderedPagination="unorderedPagination"
  />
</template>

<script setup>
import headerTemplate from '../../components/templates/headerTemplate.vue'
import homeePage from './homeePage'
import cardList from './cardList'
import unorderedPagination from './unorderedPagination'
</script>

<style>
html,
body {
  background-color: #198754;
}
</style>
