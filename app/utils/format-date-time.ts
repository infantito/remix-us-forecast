const intl = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

function formatDateTime(date: Date) {
  const result = intl.format(date)

  return result
}

export default formatDateTime
