import { doctorStore } from '@/stores/doctorStores'

export async function appointmentToAccordion(appointmentArray) {
  try {
    let appointmentConfig = []
    const useDoctorStore = doctorStore()
    for (let i = 0; i < appointmentArray.length; i++) {
      const date = new Date(appointmentArray[i].time)
      const year = date.getFullYear()
      const month = date.getMonth() + 1 // Note: Months are zero-indexed, so add 1 to get the correct month
      const day = date.getDate()
      const hour = date.getHours()
      const minute = date.getMinutes()

      const headerString = `${day}/${month}/${year} ${hour}:${minute}`
      const res = await useDoctorStore.getDoctorProfile(appointmentArray[i].doctorId)
      if (!res) {
        const { id, createdAt, updatedAt, ...getObject } = useDoctorStore.doctorStoresGetter
        const newArray = Object.entries(getObject).map(
          ([key, value]) => `${key.toUpperCase()}: ${value}`
        )
        appointmentConfig[i] = {
          header: headerString,
          imageObject: {
            imgSrc: 'https://picsum.photos/200',
            imgAlt: 'Testing',
            imgClass: 'img-thumbnail'
          },
          linkForm: newArray,
          accordionId: `${i}`,
          accordionTarget: `#${i}`,
          button: [
            {
              href: { name: 'Edit Appointment Page', params: { id: appointmentArray[i].id } },
              class: 'btn btn-success',
              linkText: 'Edit',
              role: 'button'
            },
            {
              href: { path: '/history', query: { deleteId: appointmentArray[i].id } },
              class: 'btn btn-danger',
              linkText: 'Delete',
              role: 'button',
              id: `deleteButton`
            }
          ]
        }
      }
    }

    return appointmentConfig
  } catch (error) {
  }
}
