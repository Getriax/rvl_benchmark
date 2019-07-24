const R = require('ramda')

const onlyAdults = ({ age }) => age >= 18
const toReferenceCode = ({ id, firstName }) => `${firstName}_${id}`

module.exports = R.pipe(
  R.filter(onlyAdults),
  R.sortWith([
    R.ascend(R.prop('age')),
    R.descend(R.prop('firstName')),
  ]),
  R.map(toReferenceCode),
)

