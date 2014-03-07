module.exports = function(start, stop) {
  stop -= start - 1
  return Math.floor(start + (Math.random() * stop))
};