var express      = require('express');
var path         = require('path');
var url          = require('url');
var http         = require('http');
var staticServer = require('./static');
var templates    = require('./templates');

//
// Application Constructor
//
var App = function() {
  this.env = process.env.NODE_ENV || 'development';
  this.cwd = process.cwd();

  // Expose express
  this.web = express();

  // Settings
  this.web.set('port', process.env.PORT || 3000);
  this.web.set('env', this.env);

  // Templates
  this.web.set('views', path.join(this.cwd, 'views'));
  this.web.set('view engine', 'handlebars');
  this.web.engine('handlebars', templates.engine);
  if(this.env !== 'development') this.web.enable('view cache');

  // Middleware
  this.web.use(express.favicon());
  this.web.use(express.logger('dev'));
  this.web.use(staticServer);
  this.web.use(express.bodyParser());
  this.web.use(this.web.router);
  this.web.use(express.errorHandler({
    showStack: true,
    dumpExceptions: true
  }));
};

//
// Start Servers
//
App.prototype.start = function() {
  console.info('Starting application..');

  var server = http.createServer(this.web);

  server.listen(this.web.get('port'), function() {
    var details;
    var addr;

    if(this && this.address) {
      addr = this.address();
      if(addr && addr.address && addr.port) {
        details = url.format({ protocol: 'http', hostname: addr.address, port: addr.port });
      }
    }

    if(addr && details) console.info('Web server started. Listening on ' + details);
    else console.info('Web server started.');
  });

  // Handle Errors
  server.on('error', function(err) {
    switch(err.code) {
    case 'EACCES':
      console.error('Could not start web server: Port unavailable.');
      break;
    case 'EADDRINUSE':
      console.error('Could not start web server: Address in use');
      break;
    default:
      console.error('Web server crashed.');
      break;
    }
    console.dir(err);
    process.exit(1);
  });
};

//
// Export singleton
//
module.exports = exports = new App();
