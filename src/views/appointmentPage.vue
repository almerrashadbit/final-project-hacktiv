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
import { onBeforeMount, ref, watch } from 'vue'
import appointmentTemplate from '../components/templates/appointmentTemplate.vue'
import { useRoute } from 'vue-router';
import { doctorStore } from '@/stores/doctorStores';
import { doctorScheduleObject } from '../helpers/doctorScheduleObject';

const route = useRoute();
const inputFormModel = ref([]);
const selectedDoctor = ref(null);


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
  },
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
    const useDoctorStore = doctorStore();

    selectedDoctor.value = useDoctorStore.doctorStoresGetter.find(doctor => doctor.name === newValue[0]);
    if(!selectedDoctor.value){
      inputFormModel.value[1] = '';
      inputFormFloatingInput.value = [
      {
        id: 'doctorInput',
        placeholder: '',
        value: '',
        label: 'Doctor Name',
        inputClass: 'form-control',
        divClass: 'mb-4 form-floating',
        list: 'Test',
        datalist: ['No doctor Right now']
      },
      ]
      inputFormFloatingInput.value[0].inputClass = 'form-control is-invalid';
      selectedDoctor.value = null;
      return
    }
    if(newValue[1]){
      const date = new Date(newValue[1]);
      console.log(date.getHours());
      return
    }
    const doctorSchedule = doctorScheduleObject(selectedDoctor.value);
    inputFormFloatingInput.value[1] =   {
        id: 'daySelect',
        placeholder: '',
        type: 'datetime-local',
        value: '',
        label: 'Day select',
        inputClass: 'form-control',
        divClass: 'mb-4 form-floating',
      }
    console.log(doctorSchedule);
  } catch (error) {}
})

onBeforeMount(async () => {
  try {
    const useDoctorStore = doctorStore();

    if(route.params.doctorId){
      useDoctorStore.getDoctorProfile(route.params.doctorId)
    }

    const res = await useDoctorStore.getDoctor(1, null, null, 9999);

    if (!res) {
      inputFormFloatingInput.value[0].datalist = useDoctorStore.doctorStoresGetter.map(doctor => doctor.name);
    }
  } catch (error) {
    
  }
})
</script>
