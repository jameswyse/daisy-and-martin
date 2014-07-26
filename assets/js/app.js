var $         = require('jquery/dist/jquery');
var fastclick = require('fastclick');
var preload   = require('./preload');

require('./filepicker.js');

$(function() {
  // Enable Fastclick
  fastclick(document.body);

  // Preload Images
  preload('/images/icon-radio@2x.png');
  preload('/images/icon-tick@2x.png');
  preload('/images/icon-arrow.png');
  preload('/images/icon-cross@2x.png');

  // Menu Controls
  var $menu = $('.menu');

  $menu.on('click', function(e) {
    e.preventDefault();

    $('.nav').slideToggle(500, function() {
      $menu
        .toggleClass('open')
        .text($menu.hasClass('open') ? 'Close Menu' : 'Menu');
    });
  });

});
