import { getToken, saveToken } from '@/utils/cache.utils'
import { GET } from '@/utils/http.utils'
import { modalNotSuccess, modalSuccess } from '@/helpers/modal.helper'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import config from '@/configs/env.config'
import { createPagination } from '@/helpers/pagination.helper'
import { doctorToCard } from '@/helpers/doctorCard.helper'

export const doctorStore = defineStore('doctor', () => {
  const doctorStores = ref({})
  const page = ref(1)
  const paginationObject = ref({})

  const doctorStoresGetter = computed(() => {
    return doctorStores.value
  })

  const paginationObjectGetter = computed(() => {
    return paginationObject.value
  })

  const pageGetter = computed(() => {
    return page.value
  })

  async function getDoctor(pageSet, nameParam = null, specialityParam = null) {
    try {
      page.value = pageSet
      const params = {
        page: page.value,
        offset: 5
      }

      if (nameParam) {
        params.name = nameParam
      }
      if (specialityParam) {
        params.speciality = specialityParam
      }

      console.log(params)

      const res = await GET(config.baseURL, 'DOCTOR', params)
      console.log(res.data)
      if (res.status === 200) {
        console.log(createPagination(res.data.pagination))
        paginationObject.value = createPagination(res.data.pagination)
        doctorStores.value = doctorToCard(res.data.doctors)
        console.log(doctorStores.value)
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
      console.log(res.data)
      console.log(res.status)
      if (res.status === 200) {
        console.log('MASUK DSTATSU')
        doctorStores.value = res.data
        console.log('WEEEEEEEEE')
        return null
      }
    } catch (error) {}
  }
  return { getDoctor, getDoctorProfile, paginationObjectGetter, doctorStoresGetter }
})
