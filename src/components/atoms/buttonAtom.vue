<template>
  <button
    :type="buttonType"
    :class="buttonClass"
    :data-bs-toggle="buttonDataBsToggle"
    :data-bs-target="buttonDataBsTarget"
    :data-bs-dismiss="buttonDataBsDismiss"
    :aria-label="buttonAriaLabel"
    :aria-expanded="buttonAriaExpanded"
    :aria-controls="buttonAriaControls"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  buttonClass: {
    type: String,
    required: true
  },
  buttonType: {
    type: String
  },
  buttonDataBsTarget: {
    type: String
  },
  buttonDataBsToggle: {
    type: String
  },
  buttonAriaLabel: {
    type: String
  },
  buttonAriaExpanded: {
    type: String
  },
  buttonAriaControls: {
    type: String
  },
  buttonDataBsDismiss: {
    type: String
  }
})
</script>
