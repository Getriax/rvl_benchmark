const R = require('ramda')

module.exports = R.compose(
  R.sum,
  R.map(R.prop('price')),
)
// (R.sum ∘ R.map(R.prop('price')))(x) <=> R.sum(R.map(R.prop('price'), x))
