<template>
  <div class="card text-center h-100">
    <imageAtom :imgSrc="imgSrc" :imgClass="imgClass" :imgAlt="imgAlt" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <paragraphAtom :pClass="pClass">{{ pText }}</paragraphAtom>
    </div>
    <div class="card-footer">
      <linkAtom linkClass="btn btn-primary" :href="href">{{ linkText }}</linkAtom>
      </div>
  </div>
</template>

<script setup>
import paragraphAtom from '../atoms/paragraphAtom.vue'
import linkAtom from '../atoms/linkAtom.vue'
import imageAtom from '../atoms/imageAtom.vue'

defineProps({
  imgSrc: {
    type: String,
    requred: true
  },
  imgClass: {
    type: String,
  },
  imgAlt: {
    type: String,
  },
  pClass: {
    type: String,
    required: true
  },
  href: {
    type: String
  },
  linkText: {
    type: String,
    required: true
  },
  pText: {
    type: String,
    required: true
  }
})
</script>
