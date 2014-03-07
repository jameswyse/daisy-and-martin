var handlebars = require('handlebars');
var exphbs     = require('express3-handlebars');
var wrench     = require('wrench');
var path       = require('path');
var fs         = require('fs');

var helperDirs = [path.resolve(__dirname, '..', 'views', 'helpers')];

helperDirs
  .filter(function(dir) {
    return fs.existsSync(dir);
  })
  .forEach(function(dir) {
    wrench.readdirSyncRecursive(dir)
      .filter(function(filename) {
        return (/\.js$/g).test(filename);
      })
      .map(function(filename) {
        var alias = filename.replace(/\.js$/g, '');
        handlebars.registerHelper(alias, require(path.resolve(dir, filename)));
      });
  });

//
// Set up Handlebars
//
module.exports = exphbs.create({
  handlebars: handlebars,
  defaultLayout: 'main',
  layoutsDir: 'views/layouts/',
  partialsDir: 'views/partials/',
  extname: '.handlebars'
});
