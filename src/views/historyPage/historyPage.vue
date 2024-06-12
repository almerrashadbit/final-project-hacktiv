<template>
  <historyTemplate :listItems="infoList" :headerUnordered="headerUnordered" />
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import historyTemplate from '../../components/templates/historyTemplate.vue'
import { authStore } from '@/stores/authStores'
import { appointmentStore } from '@/stores/appointmentStores'
import { appointmentToAccordion } from '../../helpers/appointmentToAccordion'

const infoList = ref([])

const headerUnordered = [
  {
    linkHref: '/home',
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
    linkClass: 'nav-link active',
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
}),
  onBeforeMount(async () => {
    try {
      const useAppointmentStore = appointmentStore()

      const doctorAppointment = await useAppointmentStore.getAppointment()
      console.log(doctorAppointment)
      infoList.value = await appointmentToAccordion(doctorAppointment.appointments)
    } catch (error) {}
  })
</script>

<style>
html,
body {
  background-color: #fbfbfb;
}
</style>
