<template>
  <inputAtom
    :input-class="floatingInputClass"
    :input-id="floatingInputId"
    :input-placeholder="floatingInputPlaceholder"
    :input-type="floatingInputType"
    :input-aria-label="floatingInputAriaLabel"
    v-model="floatingInputValue"
  />
  <labelAtom :label-for="floatingInputId" :label-class="floatingLabelClass">
    <slot></slot>
  </labelAtom>
</template>

<script setup>
import inputAtom from '../atoms/inputAtom.vue'
import labelAtom from '../atoms/labelAtom.vue'

defineProps({
  floatingInputId: {
    type: String,
    required: true
  },
  floatingInputPlaceholder: {
    type: String,
    default: 'Default'
  },
  floatingInputType: {
    type: String,
    required: true
  },
  floatingInputAriaLabel: {
    type: String
  },
  floatingInputClass: {
    type: String
  },
  floatingLabelClass: {
    type: String
  }
})

const floatingInputValue = defineModel()
</script>
