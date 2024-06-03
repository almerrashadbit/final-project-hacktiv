<template>
  <headerTemplate
    :headerUnordered="homeePage.headerUnordered"
    :isSearchBar="homeePage.isSearchBar"
    :cardList="cardList"
    :unorderedPagination="unorderedPagination"
    v-model="searchBarValue"
  />
</template>

<script setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import headerTemplate from '../../components/templates/headerTemplate.vue'
import { doctorStore } from '@/stores/doctorStores'
import { authStore } from '@/stores/authStores'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import router from '@/router/index'
import { doctorToCard } from '@/helpers/doctorCard.helper'

const unorderedPagination = ref({})
const cardList = ref([])
const searchBarValue = ref()
const route = useRoute()

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
        linkHref: '/appointment',
        linkClass: 'nav-link',
        linkText: 'New Appointment',
        listClass: 'nav-item'
      }
    ],
    unorderedDropdownClass: 'dropdown-menu',
    dropdownLinkForm: [
      {
        linkHref: '/history',
        linkClass: 'dropdown-item',
        linkText: 'View/Edit Appointment'
      },
      {
        linkHref: '/',
        linkClass: 'dropdown-item',
        linkText: 'Logout',
        linkId: 'logoutlink'
      }
    ]
  }
}

async function getDoctorData(page, nameQuery = null) {
  try {
    const useDoctorStore = doctorStore()

    const res = await useDoctorStore.getDoctor(page, nameQuery)
    if (!res) {
      unorderedPagination.value = useDoctorStore.paginationObjectGetter
      cardList.value = doctorToCard(useDoctorStore.doctorStoresGetter);
      return null
    }
    const myModal = new Modal(document.getElementById('staticBackdrop'))
    myModal.show()
  } catch (error) {}
}

watch(searchBarValue, async (newValue) => {
  try {
    console.log('WATCHEFRD')

    router.replace({
      query: {
        pageId: 1
      }
    })

    await getDoctorData(1, newValue)
  } catch (error) {}
})

onBeforeRouteUpdate(async (to, from) => {
  try {
    await getDoctorData(to.query.pageId, searchBarValue.value)
  } catch (error) {}
})

onBeforeMount(async () => {
  try {
    await getDoctorData(1)
  } catch (error) {}
})

onMounted(() => {
  document.getElementById('logoutlink').addEventListener('click', () => {
    const useAuthStore = authStore()
    useAuthStore.logout()
  })
})
</script>

<style>
html,
body {
  background-color: #198754;
}
</style>
