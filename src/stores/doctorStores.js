import { GET } from '@/utils/http.utils'
import { modalNotSuccess } from '@/helpers/modal.helper'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import config from '@/configs/env.config'
import { createPagination } from '@/helpers/pagination.helper'

export const doctorStore = defineStore('doctor', () => {
  const doctorStores = ref([])
  const page = ref(1)
  const paginationObject = ref({})

  const doctorStoresGetter = computed(() => {
    return doctorStores.value
  })

  const paginationObjectGetter = computed(() => {
    return paginationObject.value
  })

  async function getDoctor(pageSet, nameParam = null, specialityParam = null, limitParam = null) {
    try {
      page.value = pageSet
      const params = {
        page: page.value,
        sort: 'name',
      }

      if (nameParam) {
        params.name = nameParam
      }
      if (specialityParam) {
        params.speciality = specialityParam
      }
      if (limitParam) {
        params.limit = limitParam
      }

      const res = await GET(config.baseURL, 'DOCTOR', params)
      if (res.status === 200) {
        paginationObject.value = createPagination(res.data.pagination)
        doctorStores.value = res.data.doctors

        return null
      }
      return modalNotSuccess(res.message)
    } catch (error) {
      return modalNotSuccess(error)
    }
  }

  async function getDoctorProfile(id) {
    try {
      const res = await GET(config.baseURL, 'DOCTOR', '', '', `/${id}`)
      if (res.status === 200) {
        doctorStores.value = res.data
        return null
      }
    } catch (error) {}
  }
  return { getDoctor, getDoctorProfile, paginationObjectGetter, doctorStoresGetter }
})
