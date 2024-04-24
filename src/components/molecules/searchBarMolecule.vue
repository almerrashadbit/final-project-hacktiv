<template>
  <form class="d-flex" role="search">
    <inputAtom
      :inputClass="inputClass"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      :type="type"
      :ariaLabelInput="ariaLabelInput"
      @input="$emit('input', $event.target.value)"
    />
    <buttonAtom type="submit" :classButton="classButton"><slot></slot></buttonAtom>
  </form>
</template>

<script setup>
import inputAtom from '../atoms/inputAtom.vue'
import buttonAtom from '../atoms/buttonAtom.vue'

defineProps({
  inputClass: {
    type: String,
    required: true
  },
  id: {
    type: String
  },
  placeholder: {
    type: String,
    required: true
  },
  value: {
    type: String
  },
  type: {
    type: String,
    required: true
  },
  classButton: {
    type: String,
    required: true
  },
  ariaLabelInput: {
    type: String,
    default: ''
  }
})
</script>
