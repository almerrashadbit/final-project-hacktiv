<template>
  <button
    :type="type"
    :class="classButton"
    :data-bs-toggle="dataBsToggle"
    :data-bs-target="dataBsTarget"
    :aria-label="ariaLabel"
    :aria-expanded="ariaExpanded"
    :aria-controls="ariaControls"
    @click="handleClick"
  >
    <slot> Button </slot>
  </button>
</template>

<script setup>
defineProps({
  btnClass: {
    type: String
  },
  classButton: {
    type: String,
    required: true
  },
  dataBsTarget: {
    type: String
  },
  dataBsToggle: {
    type: String
  },
  ariaLabel: {
    type: String
  },
  ariaExpanded: {
    type: String
  },
  ariaControls: {
    type: String
  }
})

function handleClick(event) {
  /**
   * Click event
   * @type {Event}
   */
  this.$emit('click', event)
}
</script>
