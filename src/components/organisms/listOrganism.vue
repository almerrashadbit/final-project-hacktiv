<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
    <div class="col" v-for="card in cardList">
      <cardMolecule
        :cardImgAlt="card.imgAlt"
        cardImgSrc="https://picsum.photos/200"
        :cardLinkHref="card.href"
        cardLinkText="Profile"
        :cardPText="card.text"
        :cardHeader="card.header"
      />
    </div>
  </div>
</template>

<script setup>
import cardMolecule from '../molecules/cardMolecule.vue'

defineProps({
  cardList: {
    type: Array
  }
})
</script>
