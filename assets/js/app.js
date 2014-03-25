var $ = require('jquery/dist/jquery');

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

  preload('/images/icon-radio@2x.png');
  preload('/images/icon-tick@2x.png');
  preload('/images/icon-arrow.png');
  preload('/images/icon-cross@2x.png');

  var $menu = $('.menu');

  $menu.click(function(e) {
    e.preventDefault();
    $('.nav').slideToggle(500, function() {
      $menu.toggleClass('open');

      if($menu.hasClass('open')) {
        $menu.text('Close Menu');
      }
      else {
        $menu.text('Menu');
      }
    });
  });

});
