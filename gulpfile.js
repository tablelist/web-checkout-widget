/* ========================================================================
 * Dependencies
 * ========================================================================= */
var fs = require('fs')
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
 * Clean the build directory
 */
gulp.task('clean', function(next) {
  sh.rm('-rf', BUILDDIR);
  next();
});

/**
 * Minify javascript files
 */
gulp.task('js', ['js-un-min', 'js-min']);

gulp.task('js-min', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(uglify(MINIFIEDSCRIPT, {
      mangle: true,
      compress: true
    }))
    .pipe(gulp.dest(BUILDDIR));
});

gulp.task('js-un-min', function() {
  return gulp.src(['src/**/*.js'])
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
gulp.task('release', ['clean', 'jshint', 'js'], function() {
  return gulp.src(['src/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['release']);
