<template>
  <select :class="selectClass" :id="selectId" :aria-label="selectAriaLabel" v-model="selectValue">
    <option v-for="valuee in selectList" :value="valuee">{{ valuee }}</option>
  </select>
</template>

<script setup>

const selectValue = defineModel();

defineProps({
  selectClass: {
    type: String,
    required: true
  },
  selectId: {
    type: String,
    required: true
  },
  selectAriaLabel: {
    type: String
  },
  selectList: {
    type: Array,
    required: true
  }
})
</script>
