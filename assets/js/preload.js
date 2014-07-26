var $ = require('jquery/dist/jquery');

module.exports = function preload(url, selector) {
  $('<img/>')
    .attr({
      src: url,
      height: '1',
      width: '1'
    })
    .css({
      opacity: '0.1'
    })
    .appendTo($(selector || 'body'))
    .delay(1000)
    .remove();
};
