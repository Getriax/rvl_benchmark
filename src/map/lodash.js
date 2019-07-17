const _ = require('lodash');

module.exports = _.curryRight(_.map)('email');
// _.curry(_.map)(_, 'email')
