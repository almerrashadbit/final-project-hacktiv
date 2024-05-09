<template>
  <div class="card text-center h-100">
    <imageAtom :img-src="cardImgSrc" img-class="card-img-top" :img-alt="cardImgAlt" />
    <div class="card-body">
      <h5 class="card-title">{{ cardHeader }}</h5>
      <paragraphAtom p-class="card-text">{{ cardPText }}</paragraphAtom>
    </div>
    <div class="card-footer">
      <linkAtom link-class="btn btn-primary" :link-href="cardLinkHref">{{ cardLinkText }}</linkAtom>
    </div>
  </div>
</template>

<script setup>
import paragraphAtom from '../atoms/paragraphAtom.vue'
import linkAtom from '../atoms/linkAtom.vue'
import imageAtom from '../atoms/imageAtom.vue'

defineProps({
  cardImgSrc: {
    type: String,
    requred: true
  },
  cardImgAlt: {
    type: String
  },
  cardLinkHref: {
    type: String
  },
  cardLinkText: {
    type: String,
    required: true
  },
  cardPText: {
    type: String,
    required: true
  },
  cardHeader: {
    type: String,
    required: true
  }
})
</script>
