<template>
  <!-- <header>
    <headerOrganism :link="link" :unordered="unordered" :searchBar="searchBar" />
  </header> -->
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-11">
        <accordionMolecule v-for="listt in listItems" :accordion-button-text="listt.header">
          <InfoListOrganism
            :imageObject="listt.imageObject"
            :linkForm="listt.linkForm"
            :linkList="button"
          />
        </accordionMolecule>
      </div>
    </div>
  </div>
</template>

<script setup>
import accordionMolecule from '../molecules/accordionMolecule.vue'
import InfoListOrganism from '../organisms/infoListOrganism.vue'

const button = [
  {
    href: 'google.com',
    class: 'btn btn-success',
    linkText: 'Edit',
    role: 'button'
  },
  {
    href: 'google.com',
    class: 'btn btn-danger',
    linkText: 'Delete',
    role: 'button'
  }
]

defineProps({
  listItems: {
    type: Array,
    required: true
  }
})
</script>
