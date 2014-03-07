module.exports = function(value, contentsOne, contentsTwo, block) {
  if(typeof contentsTwo == 'object') {
    block = contentsTwo;
    contentsTwo = contentsOne;
  }
  return (value.indexOf(contentsOne) !== -1 || value.indexOf(contentsTwo) !== -1) ? block.fn(this) : block.inverse(this)
};