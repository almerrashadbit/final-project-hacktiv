<template>
  <historyTemplate :listItems="infoList" :headerUnordered="headerUnordered" />
  <ModalMolecule
    :modalHeaderText="modalObject.modalHeaderText"
    :modalLink="modalObject.modalLink"
    >{{ modalObject.text }}</ModalMolecule
  >
</template>

<script setup>
import { onBeforeMount, onMounted, onUpdated, ref } from 'vue'
import historyTemplate from '../../components/templates/historyTemplate.vue'
import { authStore } from '@/stores/authStores'
import { appointmentStore } from '@/stores/appointmentStores'
import { appointmentToAccordion } from '../../helpers/appointmentToAccordion'
import ModalMolecule from '@/components/molecules/modalMolecule.vue'
import { Modal } from 'bootstrap'
import { modalNotSuccess, modalValidation } from '@/helpers/modal.helper'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

const route = useRoute()

const removeButton = ref(false)

const infoList = ref([
  {
    header: 'Loading...',
    imageObject: {
      imgSrc: 'https://picsum.photos/200',
      imgAlt: 'Testing',
      imgClass: 'img-thumbnail'
    },
    linkForm: ['Loading...'],
    accordionId: 'loading',
    accordionTarget: `#loading`,
    button: [
      {
        href: '#',
        class: 'btn btn-success',
        linkText: 'Edit',
        role: 'button'
      },
      {
        href: '#',
        class: 'btn btn-danger',
        linkText: 'Delete',
        role: 'button',
        id: 'deleteButton'
      }
    ]
  }
])
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

const headerUnordered = [
  {
    linkHref: '/home',
    linkClass: 'nav-link',
    linkText: 'Home',
    listClass: 'nav-item',
    linkAriaCurrent: 'page'
  },
  {
    linkHref: '/appointment',
    linkClass: 'nav-link',
    linkText: 'New Appointment',
    listClass: 'nav-item'
  },
  {
    linkHref: '/history',
    linkClass: 'nav-link active',
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

async function getAppointmentToAccordion() {
  try {
    infoList.value = [
      {
        header: 'Loading...',
        imageObject: {
          imgSrc: 'https://picsum.photos/200',
          imgAlt: 'Testing',
          imgClass: 'img-thumbnail'
        },
        linkForm: ['Loading...'],
        accordionId: 'loading',
        accordionTarget: `#loading`,
        button: [
          {
            href: '#',
            class: 'btn btn-success',
            linkText: 'Edit',
            role: 'button'
          },
          {
            href: '#',
            class: 'btn btn-danger',
            linkText: 'Delete',
            role: 'button',
            id: 'deleteButton'
          }
        ]
      }
    ]
    const useAppointmentStore = appointmentStore()

    const doctorAppointment = await useAppointmentStore.getAppointment()

    if (doctorAppointment) {
      infoList.value = await appointmentToAccordion(doctorAppointment.appointments)

      return
    }

    infoList.value = [
      {
        header: 'You have no appointment right now',
        imageObject: {
          imgSrc: 'https://picsum.photos/200',
          imgAlt: 'Testing',
          imgClass: 'img-thumbnail'
        },
        linkForm: ['Empty'],
        accordionId: 'noappointment',
        accordionTarget: `#noappointment`
      }
    ]
  } catch (error) {}
}

onBeforeRouteUpdate(async (to, from) => {
  try {
    if (to.query.deleteId) {
      removeButton.value = false
    }
  } catch (error) {}
})

onMounted(() => {
  const myModal = new Modal(document.getElementById('staticBackdrop'))

  document.getElementById('logoutlink').addEventListener('click', () => {
    const useAuthStore = authStore()
    useAuthStore.logout()
  })
}),
  onBeforeMount(async () => {
    try {
      await getAppointmentToAccordion()
    } catch (error) {}
  })

onUpdated(() => {
  try {
    const myModal = new Modal(document.getElementById('staticBackdrop'))
    const deleteButtons = document.querySelectorAll('a[id="deleteButton"]')
    const validationButton = document.querySelectorAll('a[id=validationButton]')
    const successButton = document.querySelectorAll('a[id=successButton]')

    deleteButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (removeButton.value) {
          button.remove()
          return
        }
        modalObject.value = modalValidation('Are you sure do you want to delete appointment?')
        myModal.show()
      })
    })

    validationButton.forEach((button) => {
      button.addEventListener('click', async () => {
        try {
          if (removeButton.value) {
            button.remove()
            return
          }
          removeButton.value = true
          const useAppointmentStore = appointmentStore()
          modalObject.value = await useAppointmentStore.deleteAppointment(route.query.deleteId)

          myModal.show()
          await getAppointmentToAccordion()
        } catch (error) {}
      })
    })

    successButton.forEach((button) => {
      button.addEventListener('click', () => {
        myModal.hide()
      })
    })
  } catch (error) {}
})
</script>

<style>
html,
body {
  background-color: #fbfbfb;
}
</style>
