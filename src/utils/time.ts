export const getDayNameByDate = (date: string) => {
  const dateRegex = /^\d{4}-\d{1,2}-\d{1,2}$/
  if (dateRegex.test(date)) {
    return new Date(date).toLocaleString('en-us', {weekday:'long'})
  }
  return null
}