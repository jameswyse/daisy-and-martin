/**
 * Extends the current object to include the properties in its hash
 *
 * For example:
 *
 * ``` handlebars
 * {{layout}}
 * {{extend layout='another'}}
 * {{layout}}
 * ```
 *
 * ``` javascript
 * template({ layout: 'default' })
 * // default
 * // another
 * ```
 */
module.exports = function() {
  var context
    , block

  if (arguments.length === 1) {
    context = this
    block = arguments[0]
  } else {
    context = arguments[0]
    block = arguments[1]
  }

  Object.keys(block.hash).forEach(function(key) {
    context[key] = block.hash[key]
  })
  return block.fn ? block.fn(context) : ''
};