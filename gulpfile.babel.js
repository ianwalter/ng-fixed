(() => {
  'use strict';

  var gulp = require('gulp'),
      concat = require('gulp-concat'),
      babel = require('gulp-babel'),
      uglify = require('gulp-uglify'),
      jshint = require('gulp-jshint'),
      rename = require('gulp-rename'),
      connect = require('gulp-connect'),
      stylish = require('jshint-stylish'),
      debug = false;

  // Lints JavaScript code style based on jshint rules in .jshintrc
  gulp.task('lint', () => {
    gulp.src('src/**/*.js')
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter(stylish));
  });

  // Creates distribution and minified distribution file from source
  gulp.task('js', () => {
    var jsTask = gulp
      .src('src/**/*.js')
      .pipe(babel())
      .pipe(concat('ng-fixed.js'))
      .pipe(gulp.dest('dist'));
    if (!debug) {
      jsTask.pipe(uglify());
    }
    jsTask
      .pipe(rename('ng-fixed.min.js'))
      .pipe(gulp.dest('dist'))
      .pipe(connect.reload());
  });

  // Watches files for changes and re-runs relevant tasks
  gulp.task('watch', () => {
    var watcher = gulp.watch('src/**/*.js', gulp.parallel('lint', 'js'));

    function changeNotification(event) {
      console.log('File', event.path, 'was', event.type);
    }

    watcher.on('change', changeNotification);
  });

  // Uses the connect server to serve the demo page (index.html)
  gulp.task('connect', () => {
    gulp.watch(['index.html'], () => {
      gulp.src(['index.html'])
        .pipe(connect.reload());
    });

    connect.server({
      livereload: true
    });
  });

  gulp.task('default', gulp.parallel('lint', 'js', 'watch'));

  gulp.task('server', gulp.parallel('connect', 'default'));
})();