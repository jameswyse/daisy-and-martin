var clone = require('clone')


/**
 * Runs within the scope of a cloned copy of the current
 * object, with additional properties from the hash.
 *
 * For example:
 *
 * ``` handlebars
 * {{#include layout='another'}}
 *   {{layout}}
 * {{/include}}
 * {{layout}}
 * ```
 *
 * ``` javascript
 * template({ layout: 'default' })
 * // another
 * // default
 * ```
 */
module.exports = function(data) {
  var cloned = clone(this)
  Object.keys(data.hash).forEach(function(key) {
    cloned[key] = data.hash[key]
  })
  return data.fn(cloned)
};