<template>
  <button :type="type" :class="classButton" @click="handleClick">
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
