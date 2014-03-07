module.exports = function(number, add, block) {
  if(typeof number != 'number') number = parseInt(number, 10);
  return number + add;
};