<template>
  <nav class="navbar fixed-top navbar-expand-lg bg-success bg-gradient" data-bs-theme="dark">
    <div class="container-fluid">
      <linkAtom link-href="#" link-class="navbar-brand"> Patient Care </linkAtom>
      <buttonAtom
        button-type="button"
        button-class="navbar-toggler"
        button-data-bs-toggle="collapse"
        button-data-bs-target="#navbarSupportedContent"
        button-aria-label="Toggle navigation"
        button-aria-expanded="false"
        button-aria-controls="navbarSupportedContent"
        ><span class="navbar-toggler-icon"></span
      ></buttonAtom>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <unorderedLinkMolecule
          unordered-class="navbar-nav me-auto mb-2 mb-lg-0"
          :unordered-list="headerUnordered"
          :unordered-is-link="true"
        >
        </unorderedLinkMolecule>
      </div>
    </div>
  </nav>
</template>

<script setup>
import linkAtom from '../atoms/linkAtom.vue'
import buttonAtom from '../atoms/buttonAtom.vue'
import unorderedLinkMolecule from '../molecules/unorderedLinkMolecule.vue'
import SearchBarMolecule from '../molecules/searchBarMolecule.vue'

defineProps({
  headerUnordered: {
    type: Object,
    required: true
  }
})
</script>
