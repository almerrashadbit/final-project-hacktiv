<template>
  <datalist :id="datalistId">
    <option v-for="list in optionList" :value="list"></option>
  </datalist>
</template>

<script setup>
defineProps({
  datalistId: {
    type: String,
    required: true
  },
  optionList: {
    type: Array,
    required: true
  }
})
</script>
