const addDays = require('date-fns/addDays')

module.exports = function (days = 3) {
  const newDate = addDate(new Date(2020, 7, 20), days)
  return `${newDate.getDate()}-${
    newDate.getmonth() + 1
  }-${newDate.getFullYear()}`
}
