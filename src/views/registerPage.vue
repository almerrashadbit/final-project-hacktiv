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

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import authTemplate from '@/components/templates/authTemplate.vue'
import { authStore } from '@/stores/authStores'
import { ref } from 'vue'

const inputFormModel = ref([])

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

const modalObject = {
  text: 'Success',
  modalHeaderText: 'Success',
  modalLink: [
    {
      href: '#',
      class: 'btn btn-success',
      text: 'LETS GO'
    }
  ]
}

async function handleSubmitInputForm() {
  try {
    const params = {
      username: inputFormModel.value[0],
      email: inputFormModel.value[1],
      phoneNumber: inputFormModel.value[2],
      password: inputFormModel.value[3]
    }

    const useAuthStore = authStore()

    const res = await useAuthStore.login(params)

    console.log(res)
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
