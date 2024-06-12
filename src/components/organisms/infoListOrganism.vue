<template>
  <div class="container">
    <div class="row justify-content-evenly">
      <div class="col-8 col-md-8 col-lg-8 col-xl-3">
        <div class="row">
          <imageAtom
            :img-src="infoImg.imgSrc"
            :img-class="infoImg.imgClass"
            :img-alt="infoImg.imgAlt"
          />
        </div>
        <div class="row">
          <linkAtom
            v-for="linkk in infoLink"
            :link-class="linkk.class"
            :link-href="linkk.href"
            :link-role="linkk.role"
            :link-id="linkk.id"
            >{{ linkk.linkText }}</linkAtom
          >
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-7 mt-3">
        <unorderedLinkMolecule
          unordered-class="list-group"
          :unordered-list="infoList"
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
  infoImg: {
    type: Object,
    required: true
  },
  infoLink: {
    type: Array,
    required: true
  },

  infoList: {
    type: Array,
    required: true
  }
})
</script>
