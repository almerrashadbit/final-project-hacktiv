<template>
  <authTemplate
    :inputFormFloatingInput="inputFormFloatingInput"
    :inputFormLink="inputFormLink"
    :inputFormButton="inputFormButton"
    :modalObject="modalObject"
    @handleSubmitInputForm.once="handleSubmitInputForm"
    v-model="inputFormModel"
  >
    <h3>Sign into your account</h3>
  </authTemplate>
</template>

<script setup>
import { authStore } from '@/stores/authStores'
import authTemplate from '../components/templates/authTemplate.vue'
import { ref } from 'vue'
import { Modal } from 'bootstrap'

const inputFormModel = ref([])
const modalObject = ref({
  text: 'Success',
  modalHeaderText: 'Success',
  modalLink: [
    {
      href: '#',
      class: 'btn btn-success',
      text: 'Continue'
    }
  ]
})

const inputFormFloatingInput = [
  {
    id: 'emailInput',
    placeholder: 'example@gmail.com',
    value: '',
    label: 'Email or Username',
    type: 'text',
    inputClass: 'form-control',
    divClass: 'mb-4 form-floating'
  },
  {
    id: 'passwordlInput',
    placeholder: 'Password',
    value: '',
    label: 'Password',
    type: 'password',
    inputClass: 'form-control',
    divClass: 'mb-4 form-floating'
  },
  {
    id: 'rememberMeCheck',
    placeholder: '',
    value: '',
    label: 'Remember me',
    type: 'checkbox',
    inputClass: 'form-check-input',
    labelClass: 'form-check-label',
    divClass: 'mb-4 form-check'
  }
]

const inputFormLink = [
  {
    href: '/register',
    formLinkClass: 'btn btn-success',
    formLinkText: 'Register',
    role: 'button'
  },
  {
    href: '#',
    formLinkClass: 'btn btn-danger',
    formLinkText: 'Sign Up with Google',
    role: 'button'
  }
]

const inputFormButton = {
  text: 'Login',
  classButton: 'btn btn-success btn-block btn-lg'
}

async function handleSubmitInputForm() {
  try {
    const params = {
      emailOrUsername: inputFormModel.value[0],
      password: inputFormModel.value[1]
    }

    const useAuthStore = authStore()

    modalObject.value = await useAuthStore.login(params, inputFormModel.value[2])
    const myModal = new Modal(document.getElementById('staticBackdrop'))
    myModal.show()
  } catch (error) {
    console.log(error)
  }
}
</script>

<style>
html,
body {
  background-color: #198754;
}
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}
</style>
