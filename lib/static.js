var buffet = require('buffet');
var path   = require('path');
var env    = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';

module.exports = buffet({
  root: path.resolve(__dirname, '..', 'public'),
  indexes: true,
  index: 'index.html',
  gzip: env !== 'development',
  watch: env === 'development',
  poweredBy: false,
  maxAge: env === 'development' ? 0 : 300,
  notFoundPath: '/404.html',
  keepAlive: 1000,
  defaultContentType: 'application/octet-stream'
});
