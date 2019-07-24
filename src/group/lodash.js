const _ = require('lodash')

module.exports = _.curryRight(_.groupBy)('state')
