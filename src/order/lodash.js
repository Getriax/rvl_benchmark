const _ = require('lodash')

module.exports = _.curryRight(_.orderBy, 3)(
  ['age', 'lastName', 'firstName'],
  ['asc', 'desc', 'desc'],
)
