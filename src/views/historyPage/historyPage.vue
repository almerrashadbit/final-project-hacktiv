<template>
  <historyTemplate :listItems="infoList" :headerUnordered="headerUnordered" />
</template>

<script setup>
import historyTemplate from '../../components/templates/historyTemplate.vue'
import infoList from './infoList'

const headerUnordered = {
  linkForm: [
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
</script>
