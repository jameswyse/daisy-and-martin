var gulp       = require('gulp');
var gutil      = require('gulp-util');
var browserify = require('gulp-browserify');
var sass       = require('gulp-sass');
var uglify     = require('gulp-uglify');
var size       = require('gulp-size');
var concat     = require('gulp-concat');
var minifycss  = require('gulp-minify-css');
var prefix     = require('gulp-autoprefixer');
var liveReload = require('gulp-livereload');
var bourbon    = require('node-bourbon').includePaths;
var path       = require('path');
var fs         = require('fs');
var mkdirp     = require('mkdirp');

mkdirp(path.resolve(__dirname, 'public'));

//
// Returns the user's home directory
//
function getHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

//
// Default Task
//
gulp.task('default', ['sass', 'scripts', 'images', 'stats']);

//
// Development Task
//
gulp.task('dev', ['default', 'watch', 'server']);

//
// Heroku Task
//
gulp.task('heroku:production', ['sass', 'scripts', 'images']);

//
// Watch Task
//
gulp.task('watch', function () {
  var server = liveReload();

  function update(file) {
    return function() {
      setTimeout(function() {
        server.changed(path.join(__dirname, 'public', file));
      }, 1000);
    };
  }

  gulp.watch(['./assets/js/*'], ['scripts']).on('change', update('js/app.min.js'));
  gulp.watch(['./assets/sass/*'], ['sass']).on('change', update('js/app.min.css'));
  gulp.watch(['./assets/images/*'], ['images']);

});

//
// Server Task
//
gulp.task('server', function() {
  require('./app.js');
});

//
// SASS
//
gulp.task('sass', function() {
  gulp.src(['./assets/sass/index.scss'])
    .pipe(sass({
      includePaths: ['./assets/sass/'].concat(bourbon),
      outputStyle: 'expanded'
    }))
    .pipe(prefix("last 3 versions", "> 1%", "ie 8", "ie 7"))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(minifycss())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('./public/css'));
});

//
// Images
//
gulp.task('images', function() {
  gulp.src('./assets/images/*')
    .pipe(gulp.dest('./public/images'));
});

//
// Scripts
//
gulp.task('scripts', function() {
  gulp.src(['assets/js/app.js'])
    .pipe(browserify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js/'))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/js/'));

  gulp.src(['assets/js/html5shiv.min.js'])
    .pipe(gulp.dest('public/js/'));
});

//
// Stats
//
gulp.task('stats', function() {
    gulp.src('public/js/*')
    .pipe(size({showFiles: true}));

    gulp.src('public/css/*')
    .pipe(size({showFiles: true}));
});
