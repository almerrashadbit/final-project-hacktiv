<template>
  <nav v-if="unorderedPagination" aria-label="Page navigation example">
    <UnorderedLinkMolecule
      unorderedClass="pagination justify-content-center"
      :unorderedList="unorderedPagination"
      :unorderedIsLink="true"
    />
  </nav>
</template>

<script setup>
import UnorderedLinkMolecule from '../molecules/unorderedLinkMolecule.vue'

defineProps({
  unorderedPagination: {
    type: Array,
    required: true
  }
})
</script>
