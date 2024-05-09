<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    <div class="col" v-for="card in cardList">
      <cardMolecule
        :cardImgAlt="card.imgAlt"
        :cardImgSrc="card.imgSrc"
        :cardLinkHref="card.href"
        :cardLinkText="card.linkText"
        :cardPText="card.pText"
        :cardHeader="card.header"
      />
    </div>
  </div>
</template>

<script setup>
import cardMolecule from '../molecules/cardMolecule.vue'

defineProps({
  cardList: {
    type: Array,
    required: true
  }
})
</script>
