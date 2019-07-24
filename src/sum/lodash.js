const _ = require('lodash')

const byPrice = ({ price }) => parseFloat(price)
module.exports = _.curryRight(_.sumBy)(byPrice)


