<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-3 col-md-6 mb-4">
        <h5 class="mb-3" style="letter-spacing: 2px; color: #7f4722">Patient Care</h5>
        <paragraphAtom></paragraphAtom>
      </div>
      <div class="col-lg-3 col-md-6 mb-4" v-for="linkk in linkList">
        <h5 class="mb-3" style="letter-spacing: 2px; color: #7f4722">{{ link.linkHeader }}</h5>
        <unorderedLinkMolecule
          :unorderedClass="linkk.list.unorderedClass"
          :linkForm="linkk.list.linkForm"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import paragraphAtom from '../atoms/paragraphAtom.vue'
import unorderedLinkMolecule from '../molecules/unorderedLinkMolecule.vue'
</script>
