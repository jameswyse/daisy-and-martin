var handlebars = require('handlebars')

module.exports = function(partial) {
  partial = handlebars.partials[partial] || handlebars.partials[partial.replace(/\//g, '.')]
  if (!partial) return ''
  if (typeof partial === 'string') partial = handlebars.compile(partial)
  return new handlebars.SafeString(partial.call(this, this))
};