<template>
  <nav aria-label="Page navigation example">
    <UnorderedLinkMolecule
      unorderedClass="pagination justify-content-center"
      :linkForm="unorderedPagination"
      :isLink="true"
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
