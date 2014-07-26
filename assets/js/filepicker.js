var $          = require('jquery/dist/jquery');
var filepicker = window.filepicker;

$(function() {
  var $form = $('#upload-form');

  if(!$form.length) return;

  filepicker.setKey('A4QcHNURTfaZpEa5D8GL3z');

  $form.submit(function(e) {

    var name = $('#name').val();
    if(!name || !name.length) {
      return;
    }

    e.preventDefault();
    $('.thanks-message').remove();

    var storeOptions = {
     location: 'S3',
     path: '/uploads/',
     access: 'public'
    };

    var pickerOptions = {
      container: 'modal',
      extensions: ['.jpg', '.jpeg', '.gif', '.png', '.zip', '.gz', '.tgz', '.rar', '.7z'],
      services: ['COMPUTER','URL', 'DROPBOX','GOOGLE_DRIVE','FACEBOOK','FLICKR'],
      openTo: 'COMPUTER',
      multiple: true
    };

    storeOptions.path = storeOptions.path + (name.replace(/[^a-z0-9]/gi, '_').toLowerCase()) + '/';

    filepicker.pickAndStore(pickerOptions, storeOptions, function (blobs) {

      var $thanks = $('<p></p>')
        .text('Thank you for sharing your photos!')
        .addClass('thanks-message intro');

      $form.append($thanks);
      // console.log(JSON.stringify(blobs));
    });
  });
});
