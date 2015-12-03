/* ========================================================================
 * Dependencies
 * ========================================================================= */
var NODE_ENV = process.env.WERCKER_GIT_BRANCH || process.env.NODE_ENV || process.argv[3];
var ENV = setupEnv(NODE_ENV);
var ENV_PROD = (ENV == 'production');

var appConfig = require('./config/appConfig')[ENV];

var fs = require('fs');
var gulp = require('gulp');
var gulpIf = require('gulp-if');
var inject = require('gulp-inject');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var uglify = require('gulp-uglifyjs');
var replace = require('gulp-replace');
var sh = require('shelljs');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

/* =========================================================================
 * Constants
 * ========================================================================= */
var BUILDDIR = 'release';

//js
var UNMINIFIEDSCRIPT = 'tablelistwidget.js';
var MINIFIEDSCRIPT = 'tablelistwidget.min.js';

/* =========================================================================
 * Tasks
 * ========================================================================= */

/**
 * Copy src folder to build directory
 */
gulp.task('copy', ['clean'], function(next) {
  return gulp.src('src/**/*.*')
    .pipe(gulp.dest(BUILDDIR));
});

/**
 * Clean the build directory
 */
gulp.task('clean', function(next) {
  sh.rm('-rf', BUILDDIR);
  next();
});

/**
 * Replace vars in config
 */
gulp.task('replace', ['copy', 'js'], function() {
  return _replace(gulp.src(BUILDDIR + '/**/**/*'))
    .pipe(gulp.dest(BUILDDIR));
});

gulp.task('replace-html', ['replace'], function() {
  var file = fs.readFileSync(BUILDDIR + '/' + MINIFIEDSCRIPT, 'utf8');

  appConfig.SCRIPT = '<script>' + file + '</script>';
  appConfig.RAW_SCRIPT = file;

  return _replace(gulp.src([BUILDDIR + '/index.html', BUILDDIR + '/widgetGenerator/index.html']))
    .pipe(gulp.dest(BUILDDIR));
});

/**
 * Minify javascript files
 */
gulp.task('js', ['copy', 'js-un-min', 'js-min']);

gulp.task('js-min', ['copy'], function() {
  return gulp.src(BUILDDIR + '/script.js')
    .pipe(uglify(MINIFIEDSCRIPT, {
      mangle: true,
      compress: true
    }))
    .pipe(gulp.dest(BUILDDIR));
});

gulp.task('js-un-min', ['copy'], function() {
  return gulp.src(BUILDDIR + '/script.js')
    .pipe(concat(UNMINIFIEDSCRIPT))
    .pipe(gulp.dest(BUILDDIR));
});

/**
 * Js Hint
 */
gulp.task('jshint', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

/**
 * Release
 */
gulp.task('release', ['jshint', 'clean', 'copy', 'replace', 'replace-html', 'js']);

gulp.task('default', ['release']);

gulp.task('server', ['default'], function() {
  return require('./server');
});

/* =========================================================================
 * Helper Functions
 * ========================================================================= */
function _init(stream) {
  stream.setMaxListeners(0);
  return stream;
}

function _replace(stream) {
  _init(stream);

  for (var key in appConfig) {
    stream.pipe(replace('@@' + key, appConfig[key], {
      skipBinary: true
    }));
  }

  return stream;
}

function setupEnv(env) {
  // allow passing name as an argument
  if (env && env.indexOf('-') === 0) env = env.substring(1);

  // production
  if (env === 'master' || env === 'prod' || env === 'production') return 'production';
  // development
  else if (env === 'dev' || env === 'development') return 'development';
  // local
  else if (env === 'local') return 'local';
  // default
  else return 'development';
}
