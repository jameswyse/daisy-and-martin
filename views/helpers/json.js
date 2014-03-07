var handlebars = require('handlebars')

module.exports = function(data) {
  return new handlebars.SafeString(JSON.stringify(data))
};