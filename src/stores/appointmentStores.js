import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getToken, saveToken, clearToken } from '@/utils/cache.utils'
import { POST } from '@/utils/http.utils'
import config from '@/configs/env.config'

export const appointmentStore = defineStore('appointment', () => {
  const doctorValid = ref(false)
  const dayValid = ref(false)
  const timeValid = ref(false)
  const doctorDataList = ref(['There is no doctor right now'])

  const inputFormGetter = computed(() => {
    if (doctorValid.value) {
      return [
        {
          id: 'doctorInput',
          placeholder: '',
          value: '',
          label: 'Doctor Name',
          inputClass: 'form-control',
          divClass: 'mb-4 form-floating',
          list: 'Test',
          datalist: doctorDataList.value
        },
        {
          id: 'daySelect',
          placeholder: '',
          type: 'datetime-local',
          value: '',
          label: 'Day select',
          inputClass: 'form-control',
          divClass: 'mb-4 form-floating'
        }
      ]
    }

    return [
      {
        id: 'doctorInput',
        placeholder: '',
        value: '',
        label: 'Doctor Name',
        inputClass: 'form-control',
        divClass: 'mb-4 form-floating',
        list: 'Test',
        datalist: doctorDataList.value
      }
    ]
  })

  const submitValid = computed(() => {
    if (doctorValid.value && dayValid.value && timeValid.value) {
      return {
        text: 'Make appointment',
        classButton: 'btn btn-light btn-block btn-lg'
      }
    }

    return null
  })

  function setDoctorDatalist(doctorStore) {
    doctorDataList.value = doctorStore.map((doctor) => doctor.name)
  }

  async function makeNewApointment(doctorId, time, description = '') {
    try {
      const body = {
        doctorId,
        time,
        description
      }
      console.log(body)
      const token = getToken(config.idTokenKey)
      const res = await POST(config.baseURL, 'APPOINTMENT', body, null, token)

      if (res.status === 200) {
        console.log('BENARRR')
        return
      }
    } catch (error) {}
  }

  return { inputFormGetter, setDoctorDatalist, makeNewApointment }
})
