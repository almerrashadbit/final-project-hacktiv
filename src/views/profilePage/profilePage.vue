<template>
  <profileTemplate
    :infoImg="infoConfig.imageObject"
    :infoLink="infoConfig.infoLink"
    :infoList="infoConfig.infoList"
    :headerUnordered="profilePageConfig.headerUnordered"
  ></profileTemplate>
</template>

<script setup>
import { useRoute } from 'vue-router'
import profileTemplate from '../../components/templates/profileTemplate.vue'
import { onMounted, reactive } from 'vue'
import { doctorStore } from '@/stores/doctorStores'

const route = useRoute()
const infoConfig = reactive({
  imageObject: {
    imgSrc: 'https://picsum.photos/200',
    imgAlt: 'Testing',
    imgClass: 'img-thumbnail mb-4'
  },
  infoLink: [
    {
      href: '#',
      class: 'btn btn-success',
      linkText: 'Make an appointment',
      role: 'button'
    }
  ],
  infoList: []
})

const profilePageConfig = {
  link: {
    href: '#',
    linkClass: 'navbar-brand',
    formLinkText: 'Patient Care'
  },
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
        linkHref: '#',
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
  }
}

onMounted(async () => {
  try {
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
      console.log(getObject)
      const newArray = Object.entries(getObject).map(
        ([key, value]) => `${key.toUpperCase()}: ${value}`
      )
      console.log(newArray)
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
