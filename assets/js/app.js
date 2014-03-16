var $ = require('jquery/dist/jquery');

addthisevent.settings({
  mouse   : false,
  css     : false,
  outlook : { show: true, text: 'Add to Outlook Calendar' },
  google  : { show: true, text: 'Add to Google Calendar' },
  yahoo   : { show: true, text: 'Add to Yahoo Calendar' },
  ical    : { show: true, text: 'Add to Apple Calendar' },
  hotmail : { show: true, text: 'Add to Hotmail Calendar' },
  facebook: { show: false, text: 'Add to Facebook Calendar' }
});

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
