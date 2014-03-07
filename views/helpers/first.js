module.exports = function first(context, block) {
  return block.fn(context[0]);
};