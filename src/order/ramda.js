const R = require('ramda')

module.exports = R.sortWith([
  R.ascend(R.prop('age')),
  R.descend(R.prop('lastName')),
  R.descend(R.prop('firstName')),
])
