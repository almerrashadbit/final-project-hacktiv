export function doctorScheduleObject(doctorSelect) {
  const daySelect = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6
  }
  let allDaySchedule = []
  const dayKey = Object.keys(daySelect)
  doctorSelect.schedule.split(',').forEach((schedule) => {
    const [dayRange, timeRange] = schedule.split(':')
    const daySchedule = dayRange.trim().split(' - ')
    const timeSchedule = timeRange
      .trim()
      .split(' - ')
      .map((timeElement) => timeElement[0])
    for (
      let i = daySelect[daySchedule[0]];
      i <= daySelect[daySchedule[daySchedule.length - 1]];
      i++
    ) {
      allDaySchedule[allDaySchedule.length] = {
        daySchedule: dayKey[i],
        minTime: parseInt(timeSchedule[0]),
        maxTime: parseInt(timeSchedule[1]) + 12
      }
    }
  })

  return allDaySchedule
}
