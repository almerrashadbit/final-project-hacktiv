import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getToken, saveToken, clearToken } from '@/utils/cache.utils'
import { GET, PATCH, POST } from '@/utils/http.utils'
import config from '@/configs/env.config'
import { modalNotSuccess, modalSuccess } from '@/helpers/modal.helper'
import { DELETE } from '../utils/http.utils'

export const appointmentStore = defineStore('appointment', () => {
  const doctorValid = ref(false)
  const dayValid = ref(false)
  const timeValid = ref(false)
  const lastAppointmentId = ref()

  async function makeNewApointment(doctorId, time, description = '') {
    try {
      const body = {
        doctorId,
        time,
        description
      }
      const token = getToken(config.idTokenKey)
      const res = await POST(config.baseURL, 'APPOINTMENT', body, null, token)

      if (res.status === 201) {
        return modalSuccess('Make appointment Success', { path: '/home', query: { pageId: 1 } })
      }
      return modalNotSuccess(res.statusText)
    } catch (error) {
      return modalNotSuccess(error.response.data.error)
    }
  }

  async function getAppointment() {
    try {
      const token = getToken(config.idTokenKey)
      const res = await GET(config.baseURL, 'APPOINTMENT', null, token)
      if (res.status === 200) {
        console.log(res, 'asfadfc')
        return res.data
      }
    } catch (error) {}
  }

  async function editAppointment(doctorId, time, description, appointmentId) {
    try {
      console.log('MASUKKK')
      const token = getToken(config.idTokenKey)
      const body = {
        doctorId,
        time,
        description
      }
      const res = await PATCH(config.baseURL, 'APPOINTMENT', body, null, token, `/${appointmentId}`)

      if (res.status === 200) {
        return modalSuccess('Edit appointment success', { path: '/home', query: { pageId: 1 } })
      }
      return modalNotSuccess(res.statusText)
    } catch (error) {
      return modalNotSuccess(error.message)
    }
  }

  async function deleteAppointment(appointmentId) {
    try {
      if (appointmentId === lastAppointmentId.value) {
        return modalSuccess('Delete appointment success', { path: '/history' })
      }
      lastAppointmentId.value = appointmentId
      const token = getToken(config.idTokenKey)
      const res = await DELETE(config.baseURL, 'APPOINTMENT', {}, null, token, `/${appointmentId}`)
      if (res.status === 200) {
        return modalSuccess('Delete appointment success', { path: '/history' })
      }
      return modalNotSuccess(res.statusText)
    } catch (error) {
      return modalNotSuccess(error.message)
    }
  }

  return {
    makeNewApointment,
    getAppointment,
    editAppointment,
    deleteAppointment
  }
})
