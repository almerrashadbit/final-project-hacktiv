<template>
  <authTemplate
    :inputFormFloatingInput="inputFormFloatingInput"
    :inputFormLink="inputFormLink"
    :inputFormButton="inputFormButton"
    :modalObject="modalObject"
    @handleSubmitInputForm="handleSubmitInputForm"
    v-model="inputFormModel"
  >
    <h3>Register your account</h3>
  </authTemplate>
  <ModalMolecule
    :modalHeaderText="modalObject.modalHeaderText"
    :modalLink="modalObject.modalLink"
    >{{ modalObject.text }}</ModalMolecule
  >
</template>

<script setup>
import ModalMolecule from '@/components/molecules/modalMolecule.vue'
import authTemplate from '@/components/templates/authTemplate.vue'
import { modalNotSuccess } from '@/helpers/modal.helper'
import { authStore } from '@/stores/authStores'
import { activateAll, disableAll } from '@/utils/disableButton.utils'
import { Modal } from 'bootstrap'
import { ref } from 'vue'

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
    id: 'usernameInput',
    placeholder: 'Username',
    value: '',
    label: 'Username',
    type: 'text',
    inputClass: 'form-control',
    divClass: 'mb-4 form-floating'
  },
  {
    id: 'emailInput',
    placeholder: 'example@gmail.com',
    value: '',
    label: 'Email',
    type: 'email',
    inputClass: 'form-control',
    divClass: 'mb-4 form-floating'
  },
  {
    id: 'phone',
    placeholder: 'Telephone',
    value: '',
    label: 'Telephone number',
    type: 'tel',
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
    id: 'repeatPasswordlInput',
    placeholder: 'Repeat password',
    value: '',
    label: 'Repeat password',
    type: 'password',
    inputClass: 'form-control',
    divClass: 'mb-4 form-floating'
  }
]

const inputFormLink = [
  {
    href: '/',
    formLinkClass: 'btn btn-success',
    formLinkText: 'Back to Login',
    role: 'button'
  }
]

const inputFormButton = {
  text: 'Register',
  classButton: 'btn btn-success btn-block btn-lg'
}

async function handleSubmitInputForm() {
  try {
    disableAll()
    if (inputFormModel.value[3] !== inputFormModel.value[4]) {
      modalObject.value = modalNotSuccess('Password is not the same')
      const myModal = new Modal(document.getElementById('staticBackdrop'))
      myModal.show()
      activateAll()
      return
    }
    const params = {
      username: inputFormModel.value[0],
      email: inputFormModel.value[1],
      phoneNumber: inputFormModel.value[2],
      password: inputFormModel.value[3]
    }

    const useAuthStore = authStore()

    modalObject.value = await useAuthStore.register(params)
    const myModal = new Modal(document.getElementById('staticBackdrop'))
    myModal.show();
    document.getElementById('successButton').addEventListener('click', () => {
      myModal.hide()
    })
    activateAll()
  } catch (error) {
    modalObject.value = modalNotSuccess(error.message)
    const myModal = new Modal(document.getElementById('staticBackdrop'))
    myModal.show()
    activateAll()
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
