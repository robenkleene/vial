var gulp = require('gulp');


var paths = {
  example: {
    src: './example/src/',
    build: './example/build/'
  }
};


gulp.task('jade-example', function() {
  gulp.src(path.join(paths.example.src, 'jade/index.jade'))
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(paths.example.build));
});
