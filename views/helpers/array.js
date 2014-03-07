module.exports = function(value, block) {
  return Array.isArray(value) ? block.fn(this) : block.inverse(this)
};