<template>
  <div :class="inputTypeClass">
    <inputAtom
      :inputClass="inputClass"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      :type="type"
      @input="$emit('input', $event.target.value)"
    />
    <labelAtom :labelFor="id">
      <slot></slot>
    </labelAtom>
  </div>
</template>

<script setup>
import inputAtom from '../atoms/inputAtom.vue'
import labelAtom from '../atoms/labelAtom.vue'

defineProps({
  id: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  },
  value: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    required: true
  },
  inputClass: {
    type: String,
    required: true
  },
  inputTypeClass: {
    type: String,
    required: true
  }
})
</script>
