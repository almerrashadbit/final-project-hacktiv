<template>
  <form class="form-signin" @submit.prevent="handleSubmit">
    <div class="mb-4">
      <slot></slot>
    </div>
    <div class="mb-4" v-for="inputt in inputItems">
      <floatingInputMolecule
        :id="inputt.id"
        :inputClass="inputt.inputClass"
        :placeholder="inputt.placeholder"
        :value="inputt.value"
        :type="inputt.type"
        :inputTypeClass="inputt.inputTypeClass"
        @input="$emit('input', $event.target.value)"
        >{{ inputt.label }}
      </floatingInputMolecule>
    </div>
    <div class="d-grid mb-4 text-center">
    <buttonAtom type="submit" :classButton="classButton">{{ btnFormSubmit }}</buttonAtom>
  </div>
  <hr v-if="linkForm">
    <div class="mb-4 text-center" v-for="linkk in linkForm">
      <linkAtom :href="linkk.href" :linkClass="linkk.formLinkClass" :role="linkk.role">{{ linkk.formLinkText }}</linkAtom>
    </div>
  </form>
</template>

<script setup>
import floatingInputMolecule from '../molecules/floatingInputMolecule.vue'
import buttonAtom from '../atoms/buttonAtom.vue'
import linkAtom from '../atoms/linkAtom.vue'

defineProps({
  btnFormSubmit: {
    type: String,
    required: true
  },
  inputItems: {
    type: Array,
    required: true
  },
  linkForm: {
    type: Array,
    required: true
  },
  classButton: {
    type: String,
    required: true
  }
})

function handleSubmit() {
  this.$emit('submit')
}
</script>
