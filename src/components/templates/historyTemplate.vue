<template>
  <headerOrganism :header-unordered="headerUnordered" />

  <div class="container-fluid mt-5">
    <div class="row justify-content-center">
      <div class="col-11">
        <accordionMolecule v-for="listt in listItems" :accordion-button-text="listt.header">
          <InfoListOrganism
            :info-img="listt.imageObject"
            :infoList="listt.linkForm"
            :infoLink="button"
          />
        </accordionMolecule>
      </div>
    </div>
  </div>
</template>

<script setup>
import accordionMolecule from '../molecules/accordionMolecule.vue'
import headerOrganism from '../organisms/headerOrganism.vue'
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
  },
  headerUnordered: {
    type: Object,
    required: true
  }
})
</script>
