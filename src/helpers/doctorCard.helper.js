export function doctorToCard(doctorData) {
  let doctorCard = []
  console.log(doctorData)
  console.log(doctorData.length)
  for (let i = 0; i < doctorData.length; i++) {
    doctorCard[i] = {
      header: doctorData[i].name,
      text: doctorData[i].speciality,
      imgAlt: doctorData[i].name,
      href: { name: 'Doctor Profile', params: { id: doctorData[i].id } }
    }
  }
  return doctorCard
}
