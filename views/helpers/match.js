module.exports = function(value, regexp, block) {
  return value.match(new RegExp(regexp, 'g')) ? block.fn(this) : block.inverse(this)
};