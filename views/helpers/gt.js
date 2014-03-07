module.exports = function(first, second, block) {
  return first > second ? block.fn(this) : block.inverse(this)
};