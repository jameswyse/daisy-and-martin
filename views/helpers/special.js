var special = require('special-html')
  , escape = require('escape-html')
  , handlebars = require('handlebars')

module.exports = function(data) {
  return new handlebars.SafeString(special(escape(data)))
};