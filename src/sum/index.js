const data = require('./data')
const logTime = require('../logTime')
const ramda = require('./ramda')
const lodash = require('./lodash')
const vanilla = require('./vanilla')

module.exports = {
  ...data,
  lodash,
  ramda,
  vanilla,
}
