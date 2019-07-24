const data = require('./data')
const logTime = require('../logTime')
const ramda = require('./ramda')
const lodash = require('./lodash')
const vanilla = require('./vanilla')
const lodashfp = require('./lodashfp')

module.exports = {
  ...data,
  lodash,
  ramda,
  vanilla,
}
