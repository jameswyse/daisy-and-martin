var dateformat = require('dateformat')

module.exports = function(date) {
  return dateformat(date, 'dS mmmm yyyy')
};