/**
 * Check if the first argument has certain properties.
 */
module.exports = function(comparison) {
    var method = arguments[arguments.length - 1]
      , ok = true
      , properties = Array.prototype.slice.call(arguments, 1, arguments.length - 1)

    if (comparison) {
      properties.forEach(function(property) {
        ok = ok && property.split('.').reduce(function(memo, key) {
          if (memo === undefined) return undefined
          return memo[key] !== undefined ? memo[key] : undefined
        }, comparison)
      })
    } else {
      ok = false
    }

    return ok ? method.fn(this) : method.inverse ? method.inverse(this) : ''
};