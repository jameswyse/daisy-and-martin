var sendgrid = require('sendgrid');
var unhtml   = require('unhtml');
var path     = require('path');

var settings = {
  user: process.env.SENDGRID_USER,
  key: process.env.SENDGRID_KEY,
  to: 'daisyandmartinwedding@gmail.com'
};

var client = sendgrid(settings.user, settings.key);

function sendEmail(template, content, res, callback) {

  res.locals.formName = template;

  res.render('emails/' + template, { layout: 'email' }, function(err, html) {
    if(err) {
      console.dir(err);
      return callback(err);
    }

    content.html = html;

    client.send(content, function(err, json) {
      if(err) {
        console.dir(content);
        console.dir(err);
        return callback(err);
      }

      console.log('\nSent an email!');
      console.log('To: %s', content.to);
      console.log('From: %s', content.from);
      console.log('Subject: %s\n', content.subject);

      res.locals.success = true;

      return callback();
    });

  });

}

function getData(data, types) {
  var keys   = Object.keys(data);
  var output = {};

  keys.forEach(function(key) {
    var value = unhtml(data[key]);
    var type  = types[key];

    if(!value || !type) return;

    if(type === 'textarea') {
      value = value.replace(/\r\n/g, '\n').replace(/\n/g, '<br>');
    }
    else {
      value = value.replace('\r', '').replace('\n', '');
    }

    output[key] = value;
  });

  return output;
}

function getText(data, types) {
  return Object.keys(data)
    .filter(function(key) {
      return types[key];
    })
    .map(function(key) {
      switch(types[key]) {
        case 'textarea':
          return key + ':\n' + data[key];
        default:
          return key + ': ' + data[key];
      }
    })
    .join('\n');
}

module.exports.contact = function(req, res, next) {
  req.setEncoding('utf8');

  var types = {
    'fullname': 'text',
    'subject': 'text',
    'email': 'text',
    'message': 'textarea'
  };

  var data = getData(req.body, types);
  var text = getText(data, types);

  var content = {
    to: settings.to,
    from: data.email,
    subject: data.subject,
    text: text
  };

  res.locals = data;

  sendEmail('contact', content, res, next);
};

module.exports.rsvp = function(req, res, next) {
  req.setEncoding('utf8');

  var types = {
    'fullname': 'text',
    'attending': 'radio',
    'diet': 'textarea',
    'fullnameGuest': 'text',
    'attendingGuest': 'radio',
    'dietGuest': 'textarea',
    'email': 'text',
    'important': 'textarea',
    'additional': 'textarea'
  };

  var data = getData(req.body, types);

  if(!data.fullnameGuest) data.attendingGuest = 'NO';
  var text = getText(data, types);

  var content = {
    to: settings.to,
    from: data.email,
    subject: 'RSVP from ' + data.fullname,
    text: text
  };

  res.locals = data;

  sendEmail('rsvp', content, res, next);
};
