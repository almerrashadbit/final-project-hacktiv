<template>
  <header>
    <headerOrganism :header-unordered="headerUnordered" :is-search-bar="isSearchBar" />
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
          <h1 class="mb-4">Welcome, Almer Rashad</h1>
          <h4 class="mb-4">Make your appointment with Patient Care Web now</h4>
          <a data-mdb-ripple-init class="btn btn-outline-light btn-lg" href="#!" role="button"
            >Make an Appointment</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Hero -->
  <!-- Hero -->
  <div class="container-fluid bg-success bg-gradient py-4">
    <div class="row justify-content-center">
      <div class="col-10 rounded p-4">
        <listOrganism :cardList="cardList" />
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

defineProps({
  headerUnordered: {
    type: Object,
    required: true
  },
  isSearchBar: {
    type: Boolean,
    required: true
  },
  cardList: {
    type: Array,
    required: true
  },
  unorderedPagination: {
    type: Array,
    requred: true
  }
})
</script>
