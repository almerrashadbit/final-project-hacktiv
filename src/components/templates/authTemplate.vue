<template>
  <div class="container-fluid py-4">
    <div class="row justify-content-evenly align-items-center">
      <div class="col-11 col-lg-5 rounded text-center text-white">
        <h1>Welcome to Patient Care Website</h1>
        <p>A doctor appointment website</p>
      </div>
      <div class="col-11 col-lg-5 bg-light rounded p-3">
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
  <modalMolecule
    :modalHeaderText="modalObject.modalHeaderText"
    :modalLink="modalObject.modalLink"
    >{{ modalObject.text }}</modalMolecule
  >
</template>

<script setup>
import inputForm from '../organisms/inputFormOrganism.vue'
import modalMolecule from '../molecules/modalMolecule.vue'

const inputFormModel = defineModel({ type: Array })

defineProps({
  inputFormFloatingInput: {
    type: Array,
    required: true
  },
  inputFormLink: {
    type: Array,
    required: true
  },
  inputFormButton: {
    type: Object,
    required: true
  },
  modalObject: {
    type: Object,
    required: true
  }
})
</script>
