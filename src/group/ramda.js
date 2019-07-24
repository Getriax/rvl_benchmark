const R = require('ramda')

module.exports = R.groupBy(R.prop('state'))
