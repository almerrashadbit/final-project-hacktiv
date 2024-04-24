<template>
  <div class="container-fluid py-4">
    <div class="row justify-content-center">
      <div class="col-11 col-lg-6 bg-info rounded p-4">
        <inputForm
          :inputItems="inputItems"
          :linkForm="linkForm"
          :hrLineClass="hrLineClass"
          :buttonForm="buttonForm"
          ><slot></slot
        ></inputForm>
      </div>
    </div>
  </div>
</template>

<script setup>
import inputForm from '../organisms/inputFormOrganism.vue'

defineProps({
  inputItems: {
    type: Array,
    required: true
  },
  linkForm: {
    type: Array,
    required: true
  },
  buttonForm: {
    type: Object,
    required: true
  },
  hrLineClass: {
    type: String
  }
})
</script>
