<template>
  <headerOrganism :header-unordered="headerUnordered" />
  <div class="container-fluid mt-5">
    <div class="row justify-content-center">
      <div class="col-11">
        <div class="row">
          <div class="accordion" id="accordionExample">
            <accordionMolecule
              v-for="listt in listItems"
              :accordion-button-text="listt.header"
              :accordion-id="listt.accordionId"
              :accordion-target="listt.accordionTarget"
            >
              <InfoListOrganism
                :info-img="listt.imageObject"
                :infoList="listt.linkForm"
                :infoLink="listt.button"
              />
            </accordionMolecule>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import accordionMolecule from '../molecules/accordionMolecule.vue'
import headerOrganism from '../organisms/headerOrganism.vue'
import InfoListOrganism from '../organisms/infoListOrganism.vue'

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
