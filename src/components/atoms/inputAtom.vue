<template>
  <input
    :value="value"
    :type="type"
    :class="inputClass"
    :id="id"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  type: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  inputClass: {
    type: String,
    required: true
  },
  value: {
    type: String,
    default: ''
  }
})
</script>
