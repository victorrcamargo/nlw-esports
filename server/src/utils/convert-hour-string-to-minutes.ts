//This function will convert hours to minutes
export function convertHoursToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number)

  const minutesAmount = (hours * 60) + minutes;

  return minutesAmount;
}