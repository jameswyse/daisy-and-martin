var handlebars = require('handlebars')
  , escape = require('escape-html')
  , util = require('util')

module.exports = function(content) {
  return new handlebars.SafeString([
      '<pre>'
    , escape(util.inspect(content))
    , '</pre>'
  ].join(''))
};