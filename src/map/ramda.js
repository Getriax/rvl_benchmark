const R = require('ramda')

module.exports = R.map(R.prop('email'))

R.map(x => x)
// -> (data) -> R.map(x => x, data)
