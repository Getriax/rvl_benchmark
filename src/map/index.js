const buildData = require('./buildData')
const logTime = require('../logTime')
const rMap = require('./ramda')
const lMap = require('./lodash')
const vMap = require('./vanilla')

module.exports = {
  buildData,
  lodash: lMap,
  ramda: rMap,
  vanilla: vMap,
}
