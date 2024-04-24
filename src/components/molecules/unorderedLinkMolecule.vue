<template>
  <ul :class="unorderedClass">
    <li v-for="linkk in linkForm" :class="linkk.listClass">
      <linkAtom :href="linkk.href" :linkClass="linkk.formLinkClass" :role="linkk.role">{{
        linkk.linkText
      }}</linkAtom>
    </li>
    <slot></slot>
  </ul>
</template>

<script setup>
import linkAtom from '../atoms/linkAtom.vue'

defineProps({
  unorderedClass: {
    type: String,
    required: true
  },
  linkForm: {
    type: Array,
    required: true
  }
})
</script>
