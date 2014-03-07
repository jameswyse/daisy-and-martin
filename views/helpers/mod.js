/**
 * if (x + z) mod y
 *
 * {{#mod x 5}}1, 2, 3 or 4{{else}}0 or 5{{/mod}}
 * @return {[type]} [description]
 */
module.exports = function(x, y, z, block) {
  if (typeof z !== 'number') {
    block = z
    z = 0
  }

  return ((x + z) % y) ? block.fn(this) : block.inverse ? block.inverse(this) : ''
};