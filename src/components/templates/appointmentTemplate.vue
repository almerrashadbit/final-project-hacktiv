<template>
  <headerOrganism :header-unordered="headerUnordered" />
  <div class="container-fluid mt-5 mb-3">
    <div class="row justify-content-evenly align-items-center">
      <div class="col-10 bg-success text-center rounded">
        <inputForm
          :inputFormFloatingInput="inputFormFloatingInput"
          :inputFormLink="inputFormLink"
          :inputFormButton="inputFormButton"
          @handleSubmitInputForm="$emit('handleSubmitInputForm')"
          v-model="inputFormModel"
          ><slot></slot
        ></inputForm>
      </div>
    </div>
  </div>
</template>

<script setup>
import headerOrganism from '../organisms/headerOrganism.vue'
import inputForm from '../organisms/inputFormOrganism.vue'

const inputFormModel = defineModel({ type: Array })

defineProps({
  headerUnordered: {
    type: Object,
    required: true
  },
  inputFormFloatingInput: {
    type: Array,
    required: true
  },
  inputFormLink: {
    type: Array,
    required: true
  },
  inputFormButton: {
    type: Object
  }
})
</script>
