<template>
  <authTemplate
    :inputFormFloatingInput="inputFormFloatingInput"
    :inputFormLink="inputFormLink"
    :inputFormButton="inputFormButton"
  >
    <h3>Register your account</h3>
  </authTemplate>
</template>

<script setup>
import authTemplate from '@/components/templates/authTemplate.vue'

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
    id: 'addressInput',
    placeholder: 'Address',
    value: '',
    label: 'Address',
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
  text: 'Login',
  classButton: 'btn btn-success btn-block btn-lg'
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
