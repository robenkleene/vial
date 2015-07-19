var gulp = require('gulp');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var path = require('path');

var paths = {
  examples: {
    src: './exampless/src/',
    build: './exampless/build/'
  }
};

paths.examples.jade = {};
paths.examples.jade.src = path.join(paths.example.src, 'jade/');
paths.examples.jade.build = path.join(paths.example.build, 'html/');
paths.examples.jade.srcGlob = path.join(paths.example.jade.src, '/*.jade');
paths.examples.jade.srcWatchGlob = path.join(paths.example.jade.src, '/**/*.jade');

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
