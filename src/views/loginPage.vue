<template>
  <authTemplate
    :inputFormFloatingInput="inputFormFloatingInput"
    :inputFormLink="inputFormLink"
    :inputFormButton="inputFormButton"
  >
    <h3>Sign into your account</h3>
  </authTemplate>
</template>

<script setup>
import authTemplate from '../components/templates/authTemplate.vue'
import { onBeforeMount, onBeforeUpdate } from 'vue'

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
