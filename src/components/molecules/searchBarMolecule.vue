<template>
  <form class="d-flex" role="search" @submit.prevent="$emit('submitHandleForm')">
    <inputAtom
      input-class="form-control me-2"
      :input-placeholder="searchInputPlaceholder"
      :input-value="searchInputValue"
      input-type="search"
      input-aria-label="Search"
      v-model="searchBarValue"
    />
    <buttonAtom button-type="submit" button-class="btn btn-outline-light"><slot></slot></buttonAtom>
  </form>
</template>

<script setup>
import inputAtom from '../atoms/inputAtom.vue'
import buttonAtom from '../atoms/buttonAtom.vue'

defineProps({
  searchInputPlaceholder: {
    type: String,
    required: true
  },
  searchInputValue: {
    type: String
  }
})

const searchBarValue = defineModel()
</script>
