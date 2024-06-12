<template>
  <selectAtom
    v-if="floatingInputSelectList"
    :select-class="floatingInputClass"
    :select-id="floatingInputId"
    :select-aria-label="floatingInputAriaLabel"
    :select-list="floatingInputSelectList"
    v-model="floatingInputValue"
  />

  <inputAtom
    v-else
    :input-class="floatingInputClass"
    :input-id="floatingInputId"
    :input-placeholder="floatingInputPlaceholder"
    :input-type="floatingInputType"
    :input-aria-label="floatingInputAriaLabel"
    :input-list="floatingInputList"
    :input-min="floatingInputMin"
    v-model="floatingInputValue"
  />

  <labelAtom :label-for="floatingInputId" :label-class="floatingLabelClass">
    <slot></slot>
  </labelAtom>
</template>

<script setup>
import inputAtom from '../atoms/inputAtom.vue'
import labelAtom from '../atoms/labelAtom.vue'
import selectAtom from '../atoms/selectAtom.vue'

defineProps({
  floatingInputId: {
    type: String
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
  },
  floatingInputList: {
    type: String
  },
  floatingInputSelectList: {
    type: Array
  },
  floatingInputMin: {
    type: String
  }
})

const floatingInputValue = defineModel()
</script>
