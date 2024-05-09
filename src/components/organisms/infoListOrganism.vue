<template>
  <div class="container p-5">
    <div class="row justify-content-between">
      <div class="col-12 col-md-2">
        <div class="row">
          <imageAtom
            :img-src="imageObject.imgSrc"
            :img-class="imageObject.imgClass"
            :img-alt="imageObject.imgAlt"
          />
        </div>
        <div class="row">
          <linkAtom
            v-for="linkk in linkList"
            :link-class="linkk.class"
            :link-href="linkk.href"
            :link-role="linkk.role"
            >{{ linkk.linkText }}</linkAtom
          >
        </div>
      </div>
      <div class="col-12 col-md-8">
        <unorderedLinkMolecule
          unordered-class="list-group"
          :unordered-list="linkForm"
          :unordered-is-link="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import unorderedLinkMolecule from '../molecules/unorderedLinkMolecule.vue'
import linkAtom from '../atoms/linkAtom.vue'
import imageAtom from '../atoms/imageAtom.vue'

defineProps({
  imageObject: {
    type: Object,
    required: true
  },
  linkList: {
    type: Array,
    required: true
  },

  linkForm: {
    type: Array,
    required: true
  }
})
</script>
