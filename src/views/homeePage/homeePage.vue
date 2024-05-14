<template>
  <headerTemplate
    :headerUnordered="homeePage.headerUnordered"
    :isSearchBar="homeePage.isSearchBar"
    :cardList="cardList"
    :unorderedPagination="unorderedPagination"
  />
</template>

<script setup>
import { onBeforeMount } from 'vue';
import headerTemplate from '../../components/templates/headerTemplate.vue'
import cardList from './cardList'
import unorderedPagination from './unorderedPagination'
import { doctorStore } from '@/stores/doctorStores'

const homeePage = {
  headerUnordered: {
    linkForm: [
      {
        linkHref: '#',
        linkClass: 'nav-link active',
        linkText: 'Home',
        listClass: 'nav-item',
        linkAriaCurrent: 'page'
      },
      {
        linkHref: '/profile',
        linkClass: 'nav-link',
        linkText: 'Profile',
        listClass: 'nav-item'
      }
    ],
    unorderedDropdownClass: 'dropdown-menu',
    dropdownLinkForm: [
      {
        linkHref: '/',
        linkClass: 'dropdown-item',
        linkText: 'Profile'
      }
    ]
  },
  isSearchBar: true
}

onBeforeMount(async () => {
  try {
    const useDoctorStore = doctorStore();

    useDoctorStore.getDoctor();
  } catch (error) {
    
  }
})

</script>

<style>
html,
body {
  background-color: #198754;
}
</style>
