<template>
  <profileTemplate
    :infoImg="infoConfig.imageObject"
    :infoLink="infoConfig.infoLink"
    :infoList="infoConfig.infoList"
    :headerUnordered="profilePageConfig"
  ></profileTemplate>
</template>

<script setup>
import { useRoute } from 'vue-router'
import profileTemplate from '../../components/templates/profileTemplate.vue'
import { onMounted, reactive } from 'vue'
import { doctorStore } from '@/stores/doctorStores'
import { authStore } from '@/stores/authStores'

const route = useRoute()
const infoConfig = reactive({
  imageObject: {
    imgSrc: 'https://picsum.photos/200',
    imgAlt: 'Testing',
    imgClass: 'img-thumbnail mb-4'
  },
  infoLink: [
    {
      href: '/appointment',
      class: 'btn btn-success',
      linkText: 'Make an appointment',
      role: 'button'
    }
  ],
  infoList: []
})

const profilePageConfig = [
      {
        linkHref: '#',
        linkClass: 'nav-link',
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

onMounted(async () => {
  try {
    document.getElementById('logoutlink').addEventListener('click', () => {
      const useAuthStore = authStore()
      useAuthStore.logout()
    })
    const useDoctorStore = doctorStore()

    let res

    if (route.name === 'Profile') {
      return
    }
    if (route.name === 'Doctor Profile') {
      res = await useDoctorStore.getDoctorProfile(route.params.id)
    }

    if (!res) {
      const { id, createdAt, updatedAt, ...getObject } = useDoctorStore.doctorStoresGetter
      const newArray = Object.entries(getObject).map(
        ([key, value]) => `${key.toUpperCase()}: ${value}`
      )
      infoConfig.infoList = newArray
    }
  } catch (error) {}
})
</script>

<style>
html,
body {
  background-color: #fdfdfd;
}
</style>
