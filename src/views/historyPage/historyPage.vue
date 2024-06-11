<template>
  <historyTemplate :listItems="infoList" :headerUnordered="headerUnordered" />
</template>

<script setup>
import { onMounted } from 'vue';
import historyTemplate from '../../components/templates/historyTemplate.vue'
import { authStore } from '@/stores/authStores';

const infoList = [
  {
    header: 'Testing',
    imageObject: {
      imgSrc: 'https://picsum.photos/200',
      imgAlt: 'Testing',
      imgClass: 'img-thumbnail'
    },
    linkForm: ['Tetsing', 'testing', 'testing']
  }
]

const headerUnordered = [
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
  background-color: #fbfbfb;
}
</style>
