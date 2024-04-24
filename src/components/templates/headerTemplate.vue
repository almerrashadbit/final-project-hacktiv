<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <navContainer :link="link" :unordered="unordered" :searchBar="searchBar" />
      </div>
    </nav>
  </header>
  <img class="img-fluid" src="https://picsum.photos/2000/1100" alt="Testing">
  <div class="container-fluid py-4">
    <div class="row justify-content-center ">
      <div class="col-10 bg-info rounded p-4">
        <listOrganism :cardList="cardList" />
      </div>
    </div>
  </div>
  
</template>

<script setup>
import navContainer from '../organisms/navContainer.vue'
import listOrganism from '../organisms/listOrganism.vue';

defineProps({
  link: {
    type: Array,
    required: true
  },
  unordered: {
    type: Array,
    required: true
  },
  searchBar: {
    type: Boolean,
    required: true
  },
  cardList: {
    type: Array,
    required: true
  }
})
</script>
