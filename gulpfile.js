var path = require('path');
var gulp = require('gulp');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');

var paths = {
  examples: {
    src: './examples/src/',
    build: './examples/build/'
  }
};

paths.examples.jade = {};
paths.examples.jade.src = path.join(paths.examples.src, 'jade/');
paths.examples.jade.build = path.join(paths.examples.build, 'html/');
paths.examples.jade.srcGlob = path.join(paths.examples.jade.src, '/*.jade');
paths.examples.jade.srcWatchGlob = path.join(paths.examples.jade.src, '/**/*.jade');

gulp.task('jade-examples', function() {
  gulp.src(paths.examples.jade.srcGlob)
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(paths.examples.build));
});

gulp.task('watch', function() {
  gulp.watch(paths.examples.jade.srcWatchGlob, ['jade-examples']);
});

gulp.task('jade', ['jade-examples']);
gulp.task('default', ['jade']);
