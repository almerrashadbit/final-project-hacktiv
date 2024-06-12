<template>
  <input
    :type="inputType"
    :class="inputClass"
    :id="inputId"
    :placeholder="inputPlaceholder"
    :aria-label="inputAriaLabel"
    :list="inputList"
    :min="inputMin"
    v-model="inputValue"
  />
</template>

<script setup>
defineProps({
  inputType: {
    type: String,
    required: true
  },
  inputId: {
    type: String
  },
  inputPlaceholder: {
    type: String,
    required: true
  },
  inputClass: {
    type: String,
    required: true
  },
  inputAriaLabel: {
    type: String
  },
  inputList: {
    type: String
  },
  inputMin: {
    type: String
  }
})

const inputValue = defineModel()
</script>
