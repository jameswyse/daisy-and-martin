var moment = require('moment');
var app    = require('./lib/app');
var email  = require('./lib/email');

app.web.get('/', function(req, res, next) {
  var remaining = moment([2014, 6, 5]).fromNow();

  res.render('pages/home', { page: 'wedding', remaining: remaining });
});

app.web.get('/travel', function(req, res, next) {
  res.render('pages/travel', { page: 'travel' });
});

app.web.get('/accommodation', function(req, res, next) {
  res.render('pages/accommodation', { page: 'accommodation' });
});

app.web.get('/gifts', function(req, res, next) {
  res.render('pages/gifts', { page: 'gifts' });
});

app.web.get('/rsvp', function(req, res, next) {
  res.render('pages/rsvp', { page: 'rsvp' });
});

app.web.get('/contact', function(req, res, next) {
  res.render('pages/contact', { page: 'contact' });
});

app.web.get('/photos', function(req, res, next) {
  res.render('pages/photos', { page: 'photos' });
});

//
// Form Handlers
//
app.web.post('/contact', email.contact, function(req, res, next) {
  res.render('pages/contact', { page: 'contact' });
});

app.web.post('/rsvp', email.rsvp, function(req, res, next) {
  res.render('pages/rsvp', { page: 'rsvp' });
});


app.start();
