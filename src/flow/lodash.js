const _ = require('lodash')

const onlyAdults = ({ age }) => age >= 18
const toReferenceCode = ({ id, firstName }) => `${firstName}_${id}`

module.exports = data => _.chain(data)
  .filter(onlyAdults)
  .orderBy(
    ['age', 'firstName'],
    ['asc', 'desc'],
  )
  .map(toReferenceCode)
  .value()
