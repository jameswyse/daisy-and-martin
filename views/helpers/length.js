module.exports = function length(context, block) {
  return block.fn(context.length);
};