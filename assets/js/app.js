var $ = require('jquery/dist/jquery');
var fastclick = require('fastclick');

function preload(url, selector) {
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
}

$(function() {
  fastclick(document.body);

  preload('/images/icon-radio@2x.png');
  preload('/images/icon-tick@2x.png');
  preload('/images/icon-arrow.png');
  preload('/images/icon-cross@2x.png');

  var $menu = $('.menu');

  $menu.on('click touc', function(e) {
    e.preventDefault();

    $('.nav').slideToggle(500, function() {
      $menu
        .toggleClass('open')
        .text($menu.hasClass('open') ? 'Close Menu' : 'Menu');
    });
  });

});
