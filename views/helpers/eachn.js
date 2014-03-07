var handlebars = require('handlebars')

/**
 * Equivalent to #each, however will modify each object
 * in the array to contain an "n" value representing their
 * index.
 */
module.exports = function eachn(array, block) {
  if (!array || !array.length) return ''

  function modifier(item, n) {
    item.n = n
    return block.fn(item)
  };

  return new handlebars.SafeString(
    array.map(modifier).join('')
  )
};