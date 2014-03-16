var $ = require('jquery/dist/jquery');

$(function() {
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
