<template>
  <h2 id="appointmentTitle" class="text-center text-white mt-5 bg-success p-3 bg-gradient"></h2>
  <appointmentTemplate
    :inputFormFloatingInput="inputFormFloatingInput"
    :inputFormLink="inputFormLink"
    :inputFormButton="inputFormButton"
    :headerUnordered="profilePageConfig"
    @handleSubmitInputForm="handleSubmitInputForm"
    v-model="inputFormModel"
  >
    <h5 class="mt-3" id="dateTitle"></h5>
    <h5 class="mt-3" id="appointmentDate"></h5>
  </appointmentTemplate>
  <ModalMolecule
    :modalHeaderText="modalObject.modalHeaderText"
    :modalLink="modalObject.modalLink"
    >{{ modalObject.text }}</ModalMolecule
  >
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, ref, watch } from 'vue'
import appointmentTemplate from '../components/templates/appointmentTemplate.vue'
import { useRoute } from 'vue-router'
import { doctorStore } from '@/stores/doctorStores'
import { appointmentStore } from '../stores/appointmentStores'
import { doctorScheduleObject } from '../helpers/doctorScheduleObject'
import { authStore } from '@/stores/authStores'
import { Modal } from 'bootstrap'
import ModalMolecule from '@/components/molecules/modalMolecule.vue'
import { activateAll, disableAll } from '@/utils/disableButton.utils'
import { modalSuccess, modalValidation } from '@/helpers/modal.helper'

const route = useRoute()
const inputFormModel = ref([])
const selectedDoctor = ref(null)
const selectedDoctorSchedule = ref([])

const modalObject = ref({
  text: 'Success',
  modalHeaderText: 'Success',
  modalLink: [
    {
      href: '#',
      class: 'btn btn-success',
      text: 'Continue',
      id: 'successButton'
    },
    {
      href: '#',
      class: 'btn btn-success',
      text: 'Continue',
      id: 'validationButton'
    }
  ]
})
const inputFormFloatingInput = ref([
  {
    id: 'doctorInput',
    placeholder: '',
    value: '',
    label: 'Doctor Name',
    inputClass: 'form-control',
    divClass: 'mb-4 form-floating',
    list: 'Test',
    datalist: ['No doctor Right now']
  }
])

const inputFormButton = ref()

const profilePageConfig = [
  {
    linkHref: '/home',
    linkClass: 'nav-link',
    linkText: 'Home',
    listClass: 'nav-item',
    linkAriaCurrent: 'page'
  },
  {
    linkHref: '/appointment',
    linkClass: 'nav-link active',
    linkText: 'New Appointment',
    listClass: 'nav-item'
  },
  {
    linkHref: '/history',
    linkClass: 'nav-link',
    linkText: 'View/Edit Appointment',
    listClass: 'nav-item'
  },
  {
    linkHref: '/',
    linkClass: 'nav-link',
    linkText: 'Logout',
    listClass: 'nav-item',
    linkId: 'logoutlink'
  }
]

function handleSubmitInputForm() {
  disableAll()

  const useAppointmentStore = appointmentStore()
  const myModal = new Modal(document.getElementById('staticBackdrop'))
  modalObject.value = modalValidation('Are you sure the data is correct?')

  myModal.show()

  document.getElementById('validationButton').addEventListener('click', async () => {
    if (route.name === 'Edit Appointment Page') {
      console.log('Testing')
      console.log(route.params.id)
      modalObject.value = await useAppointmentStore.editAppointment(
        selectedDoctor.value.id,
        inputFormModel.value[1],
        inputFormModel.value[2],
        route.params.id
      )
      myModal.show()
      return
    }
    modalObject.value = await useAppointmentStore.makeNewApointment(
      selectedDoctor.value.id,
      inputFormModel.value[1],
      inputFormModel.value[2]
    )
    myModal.show()
  })
  document.getElementById('successButton').addEventListener('click', async () => {
    myModal.hide()
  })
}

watch(inputFormModel.value, async (newValue) => {
  try {
    const useDoctorStore = doctorStore()

    const daySelect = {
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4,
      Saturday: 5,
      Sunday: 6
    }

    selectedDoctor.value = useDoctorStore.doctorStoresGetter.find(
      (doctor) => doctor.name === newValue[0]
    )
    if (!selectedDoctor.value) {
      inputFormModel.value[1] = ''
      inputFormFloatingInput.value = [
        {
          id: 'doctorInput',
          placeholder: '',
          value: '',
          label: 'Doctor Name',
          inputClass: 'form-control',
          divClass: 'mb-4 form-floating',
          list: 'Test',
          datalist: useDoctorStore.doctorStoresGetter.map((doctor) => doctor.name)
        }
      ]
      inputFormFloatingInput.value[0].inputClass = 'form-control is-invalid'
      selectedDoctor.value = null
      document.getElementById('dateTitle').innerHTML = ''
      document.getElementById('appointmentDate').innerHTML = ''
      return
    }
    if (newValue[1]) {
      const date = new Date(newValue[1])
      const appointmentHour = date.getHours()
      const appointmentDay = date.getDay() - 1 < 0 ? 6 : date.getDay() - 1
      let dayCheck = false
      let dayArray = 0

      for (let i = 0; i < selectedDoctorSchedule.value.length; i++) {
        if (appointmentDay === daySelect[selectedDoctorSchedule.value[i].daySchedule]) {
          dayCheck = true
          dayArray = i
        }
      }

      if (!dayCheck) {
        inputFormFloatingInput.value[1].inputClass = 'form-control is-invalid'
        inputFormButton.value = null
        return
      }
      console.log(appointmentHour)
      console.log(selectedDoctorSchedule.value[dayArray].minTime)
      console.log(selectedDoctorSchedule.value[dayArray].maxTime)
      if (
        appointmentHour < selectedDoctorSchedule.value[dayArray].minTime ||
        appointmentHour > selectedDoctorSchedule.value[dayArray].maxTime
      ) {
        inputFormFloatingInput.value[1].inputClass = 'form-control is-invalid'
        inputFormButton.value = null
        return
      }

      inputFormFloatingInput.value[1].inputClass = 'form-control'

      inputFormButton.value = {
        text: 'Make appointment',
        classButton: 'btn btn-light btn-block btn-lg'
      }
      return
    }
    selectedDoctorSchedule.value = doctorScheduleObject(selectedDoctor.value)
    inputFormFloatingInput.value[1] = {
      id: 'daySelect',
      placeholder: '',
      type: 'datetime-local',
      value: '',
      label: 'Day select',
      inputClass: 'form-control',
      divClass: 'mb-4 form-floating',
      min: new Date().toISOString().slice(0, new Date().toISOString().lastIndexOf(':'))
    }
    inputFormFloatingInput.value[2] = {
      id: 'descriptionInput',
      placeholder: 'Description',
      value: '',
      label: 'Description',
      type: 'text',
      inputClass: 'form-control',
      divClass: 'mb-4 form-floating'
    }
    inputFormFloatingInput.value[0].inputClass = 'form-control'

    document.getElementById('dateTitle').innerHTML = 'Doctor Schedule: '
    document.getElementById('appointmentDate').innerHTML = selectedDoctor.value.schedule
  } catch (error) {}
})

onBeforeMount(async () => {
  try {
    const useDoctorStore = doctorStore()

    const res = await useDoctorStore.getDoctor(1, null, null, 9999)

    if (!res) {
      inputFormFloatingInput.value[0].datalist = useDoctorStore.doctorStoresGetter.map(
        (doctor) => doctor.name
      )
    }

    if (route.name === 'Edit Appointment Page') {
      document.getElementById('appointmentTitle').innerHTML = 'Edit appointment Page'
      return
    }

    document.getElementById('appointmentTitle').innerHTML = 'Create appointment Page'
  } catch (error) {}
})

onMounted(() => {
  document.getElementById('logoutlink').addEventListener('click', () => {
    const useAuthStore = authStore()
    useAuthStore.logout()
  })
})
</script>

<style>
html,
body {
  background-color: #fbfbfb;
}
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 80vh;
}
</style>
