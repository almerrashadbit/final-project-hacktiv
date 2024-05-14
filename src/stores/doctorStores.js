import { getToken, saveToken } from "@/utils/cache.utils";
import { GET } from "@/utils/http.utils";
import { modalNotSuccess, modalSuccess } from "@/utils/modal.utils";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { authStore } from '@/stores/authStores'
import config from '@/configs/env.config'



export const doctorStore = defineStore('doctor', () => {
  const doctorStores = ref('')
  const useAuthStore = authStore();

  const doctorStoresGetter = computed(() => {
    return doctorStores;
  })

  async function getDoctor() {
    try {
      const res = await GET(config.baseURL, 'DOCTOR', '', '');
      console.log(res);
      if(res.status === 200){
        tokenFromAuth.value = res.data.token;
        saveToken(tokenFromAuth.value);
        tokenVerified.value = true;
        return modalSuccess('Login Success', '/home')
      }
      return modalNotSuccess(res.message);
    } catch (error) {
      return modalNotSuccess(error);
    }
  }


  return { getDoctor }
})
