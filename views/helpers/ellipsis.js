module.exports = function(value, length) {
  var length = length || 40
    , value = value + ''

  return value.length > length ? value.slice(0, length) + '...' : value
};