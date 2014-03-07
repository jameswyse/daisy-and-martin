var handlebars = require('handlebars')

module.exports = function(array, start, end, block) {
  if (!array) return ''

  if (typeof end !== 'number') {
    block = end
    end = array.length
  }

  function modifier(item, i) {
    item.index = i;
    return block.fn(item);
  };

  return new handlebars.SafeString(
    array.slice(start, end).map(modifier).join('')
  )
};
