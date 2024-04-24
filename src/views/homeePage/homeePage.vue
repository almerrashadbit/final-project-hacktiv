<template>
  <headerTemplate
    :link="homeePage.link"
    :unordered="homeePage.unordered"
    :searchBar="homeePage.searchBar"
    :cardList="cardList"
  />
</template>

<script setup>
import headerTemplate from '../../components/templates/headerTemplate.vue'
import homeePage from './homeePage'
import cardList from './cardList'
</script>
