<template>
  <headerTemplate
    :headerUnordered="homeePage"
    :cardList="cardList"
    :unorderedPagination="unorderedPagination"
    :search-text="searchText"
    @submitHandleForm="submitHandleForm"
    v-model="searchBarValue"
  />
  <ModalMolecule
    :modalHeaderText="modalObject.modalHeaderText"
    :modalLink="modalObject.modalLink"
    >{{ modalObject.text }}</ModalMolecule
  >
</template>

<script setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import headerTemplate from '../../components/templates/headerTemplate.vue'
import { doctorStore } from '@/stores/doctorStores'
import { authStore } from '@/stores/authStores'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import router from '@/router/index'
import { doctorToCard } from '@/helpers/doctorCard.helper'
import ModalMolecule from '@/components/molecules/modalMolecule.vue'
import { Modal } from 'bootstrap'

const unorderedPagination = ref([])
const cardList = ref([])
const searchBarValue = ref()
const route = useRoute()

const searchText = ref('Filter: Doctor')

const homeePage = [
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
  },
  {
    linkHref: '/history',
    linkClass: 'nav-link',
    linkText: 'View/Edit Appointment',
    listClass: 'nav-item'
  },
  {
    linkHref: '/',
    linkClass: 'nav-link',
    linkText: 'Logout',
    listClass: 'nav-item',
    linkId: 'logoutlink'
  }
]

const modalObject = ref({
  text: 'Success',
  modalHeaderText: 'Success',
  modalLink: [
    {
      href: '#',
      class: 'btn btn-success',
      text: 'Continue'
    }
  ]
})

function submitHandleForm() {
  if (route.query.search === 'speciality') {
    searchText.value = 'Filter: Doctor'
    router.replace({
      query: {
        pageId: 1,
        search: 'doctor'
      }
    })
    return
  }
  router.replace({
    query: {
      pageId: 1,
      search: 'speciality'
    }
  })
  searchText.value = 'Filter: Speciality'
}

async function getDoctorData(page, nameQuery = null, specialityQuery = null) {
  try {
    const useDoctorStore = doctorStore()

    const res = await useDoctorStore.getDoctor(page, nameQuery, specialityQuery)
    if (!res) {
      unorderedPagination.value = useDoctorStore.paginationObjectGetter
      cardList.value = doctorToCard(useDoctorStore.doctorStoresGetter)
      console.log(cardList.value)
      return null
    }
    const myModal = new Modal(document.getElementById('staticBackdrop'))
    myModal.show()
  } catch (error) {}
}

watch(searchBarValue, async (newValue) => {
  try {
    if (route.query.search == 'speciality') {
      router.replace({
        query: {
          pageId: 1,
          search: 'speciality'
        }
      })
      await getDoctorData(1, null, newValue)
      return
    }
    router.replace({
      query: {
        pageId: 1,
        search: 'doctor'
      }
    })
    await getDoctorData(1, newValue)
  } catch (error) {}
})

onBeforeRouteUpdate(async (to, from) => {
  try {
    if (to.query.search == 'speciality') {
      await getDoctorData(to.query.pageId, null, searchBarValue.value)
      return
    }
    await getDoctorData(to.query.pageId, searchBarValue.value)
  } catch (error) {}
})

onBeforeMount(async () => {
  try {
    router.replace({
      query: {
        pageId: 1,
        search: 'doctor'
      }
    })
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

<style scoped>
html,
body {
  background-color: #198754;
}
</style>
