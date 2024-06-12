<template>
  <header>
    <headerOrganism :header-unordered="headerUnordered" />
  </header>
  <!-- Hero -->
  <!-- Hero -->
  <div
    class="text-center bg-image rounded-3"
    style="background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp'); height: 400px"
  >
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6); height: 100%">
      <div class="d-flex justify-content-center align-items-center h-100 p-4">
        <div class="text-white">
          <h1 class="mb-4">Welcome</h1>
          <h4 class="mb-5">Make your appointment with Patient Care Web now</h4>
          <SearchBarMolecule search-input-placeholder="Search" v-model="searchBarValue" @submitHandleForm="$emit('submitHandleForm')"
            >{{ searchText }}</SearchBarMolecule
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Hero -->
  <!-- Hero -->
  <div class="container-fluid bg-success bg-gradient py-4">
    <div class="row justify-content-center">
      <div class="col-10 rounded p-3">
        <listOrganism v-if="cardList" :card-list="cardList" />
        <h2 v-else>There is no doctor right now</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 rounded">
        <paginationOrganism :unorderedPagination="unorderedPagination" />
      </div>
    </div>
  </div>
</template>

<script setup>
import headerOrganism from '../organisms/headerOrganism.vue'
import listOrganism from '../organisms/listOrganism.vue'
import paginationOrganism from '../organisms/paginationOrganism.vue'
import SearchBarMolecule from '../molecules/searchBarMolecule.vue'

defineProps({
  headerUnordered: {
    type: Object,
    required: true
  },
  cardList: {
    type: Array
  },
  unorderedPagination: {
    type: Array,
    requred: true
  },
  searchText: {
    type: String
  }
})

const searchBarValue = defineModel()
</script>
