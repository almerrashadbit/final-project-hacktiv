<template>
  <input
    :value="value"
    :type="type"
    :class="inputClass"
    :id="id"
    :placeholder="placeholder"
    :aria-label="ariaLabelInput"
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
    type: String
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
    type: String
  },
  ariaLabelInput: {
    type: String
  }
})
</script>
