<template>
  <appointmentTemplate
    :inputFormFloatingInput="inputFormFloatingInput"
    :inputFormLink="inputFormLink"
    :inputFormButton="inputFormButton"
    :headerUnordered="profilePageConfig.headerUnordered"
    @handleSubmitInputForm.once="handleSubmitInputForm"
    v-model="inputFormModel"
  >
    <h2>APOINTMENT</h2>
  </appointmentTemplate>
</template>

<script setup>
import { ref, watch } from 'vue'
import appointmentTemplate from '../components/templates/appointmentTemplate.vue'

const inputFormModel = ref([])

const inputFormFloatingInput = ref([
  {
    id: 'doctor',
    placeholder: '',
    value: '',
    label: 'Doctor Name',
    inputClass: 'form-control',
    divClass: 'mb-4 form-floating',
    list: 'Test',
    datalist: ['Testing', 'testing']
  },
  {
    id: 'daySelect',
    selectList: ['Testing', 'testing'],
    placeholder: '',
    value: '',
    label: 'Day select',
    inputClass: 'form-control',
    divClass: 'mb-4 form-floating',
  },
  {
    id: 'timeSelect',
    placeholder: '',
    value: '',
    type: 'time',
    label: 'Time select',
    inputClass: 'form-control',
    divClass: 'mb-4 form-floating',
  }
])

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

const profilePageConfig = {
  headerUnordered: {
    linkForm: [
      {
        linkHref: '#',
        linkClass: 'nav-link active',
        linkText: 'Home',
        listClass: 'nav-item',
        linkAriaCurrent: 'page'
      },
      {
        linkHref: '/appointment',
        linkClass: 'nav-link',
        linkText: 'New Appointment',
        listClass: 'nav-item'
      }
    ],
    unorderedDropdownClass: 'dropdown-menu',
    dropdownLinkForm: [
      {
        linkHref: '/history',
        linkClass: 'dropdown-item',
        linkText: 'View/Edit Appointment'
      },
      {
        linkHref: '/',
        linkClass: 'dropdown-item',
        linkText: 'Logout',
        linkId: 'logoutlink'
      }
    ]
  }
}

function handleSubmitInputForm(){
    console.log(inputFormModel.value);
}

watch(inputFormModel.value, async (newValue) => {
  try {
    console.log(newValue)
  } catch (error) {}
})
</script>
