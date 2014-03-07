var handlebars = require('handlebars')

module.exports = function(array, count, block) {
  if (!array) return ''

  var batches = []
    , i = 0
    , l = array.length

  while (i < l) {
    batches.push(array.slice(i, i + count))
    i += count
  }

  return new handlebars.SafeString(
    batches.map(block.fn).join('')
  )
};