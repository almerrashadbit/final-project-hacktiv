<template>
  <ul :class="unorderedClass">
    <li v-if="unorderedIsLink" v-for="linkk in unorderedList" :class="linkk.listClass">
      <linkAtom
        :linkHref="linkk.linkHref"
        :linkClass="linkk.linkClass"
        :linkRole="linkk.linkRole"
        :linkAriaCurrent="linkk.linkAriaCurrent"
        :linkId="linkk.linkId"
        >{{ linkk.linkText }}</linkAtom
      >
    </li>
    <li v-else v-for="linkk in unorderedList" class="list-group-item list-group-item-success">
      {{ linkk }}
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
  unorderedList: {
    type: Array,
    required: true
  },
  unorderedIsLink: {
    type: Boolean,
    required: true
  }
})
</script>
