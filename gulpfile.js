var gulp = require('gulp');
var jade = require('gulp-jade');
var path = require('path');
var plumber = require('gulp-plumber');

var paths = {
  example: {
    src: './example/src/',
    build: './example/build/'
  }
};

paths.example.jade = {};
paths.example.jade.src = path.join(paths.example.src, 'jade');
paths.example.jade.build = path.join(paths.test.build, 'html');
paths.example.jade.srcGlob = path.join(paths.example.jade.src, '/*.jade');
paths.example.jade.srcWatchGlob = path.join(paths.example.jade.src, '/**/*.jade');


gulp.task('jade-example', function() {
  gulp.src(path.join(paths.example.src, 'jade/*.jade'))
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(paths.example.build));
});

gulp.task('watch', function() {
    // Test
    gulp.watch(paths.test.src + 'jade/*.*', ['jade-test']);

    var testJSPaths = [paths.test.src + 'tests/*.js', paths.test.src + 'js/*.js'];
    gulp.watch(testJSPaths, ['browserify-test']);

    // Example
    // When "example" files change, also build "test" because "test" imports "example" content
    var exampleJadePaths = [paths.example.src + 'jade/*.*', paths.example.src + 'markdown/*.*'];
    gulp.watch(exampleJadePaths, ['jade-example', 'jade-test']);
});

gulp.task('jade', ['jade-test', 'jade-example']);
gulp.task('default', ['jade', 'browserify-test']);
