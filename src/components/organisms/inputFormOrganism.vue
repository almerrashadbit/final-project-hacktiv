<template>
  <form class="form-signin" @submit.prevent="$emit('handleSubmitInputForm')">
    <div class="mb-4">
      <slot></slot>
    </div>
    <div v-for="(inputt, index) in inputFormFloatingInput" :class="inputt.divClass">
      <floatingInputMolecule
        :floating-input-id="inputt.id"
        :floating-input-placeholder="inputt.placeholder"
        :floating-input-type="inputt.type"
        :floating-input-class="inputt.inputClass"
        :floating-label-class="inputt.labelClass"
        v-model="inputFormValue[index]"
        >{{ inputt.label }}
      </floatingInputMolecule>
    </div>
    <div class="d-grid mb-4 text-center">
      <buttonAtom type="submit" :button-class="inputFormButton.classButton">{{
        inputFormButton.text
      }}</buttonAtom>
    </div>
    <horizontalLineAtom v-if="inputFormLink" hr-class="border border-dark border-1" />
    <div class="mb-4 text-center" v-for="linkk in inputFormLink">
      <linkAtom :link-href="linkk.href" :link-class="linkk.formLinkClass" :link-role="linkk.role">{{
        linkk.formLinkText
      }}</linkAtom>
    </div>
  </form>
</template>

<script setup>
import floatingInputMolecule from '../molecules/floatingInputMolecule.vue'
import buttonAtom from '../atoms/buttonAtom.vue'
import linkAtom from '../atoms/linkAtom.vue'
import horizontalLineAtom from '../atoms/horizontalLineAtom.vue'
import { authStore } from '@/stores/authStores'

const inputFormValue = defineModel({ type: Array })

defineProps({
  inputFormFloatingInput: {
    type: Array,
    required: true
  },
  inputFormLink: {
    type: Array,
    required: true
  },
  inputFormHrClass: {
    type: String
  },
  inputFormButton: {
    type: Object,
    required: true
  }
})

async function handleSubmit() {
  try {
    const params = {
      emailOrUsername: inputFormValue.value[0],
      password: inputFormValue.value[1]
    }

    const useAuthStore = authStore()

    const res = await useAuthStore.login(params)

    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
</script>
