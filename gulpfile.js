const gulp = require('gulp');

gulp.task('copy-files', function() {
  return gulp.src([
      'app.js',
      'controllers/**/*',
      'models/**/*',
      'routes/**/*',
      'services/**/*',
      'config/**/*',
      'logger.js',
      'package.json'
    ], { base: '.' })
    .pipe(gulp.dest('build'));
});

gulp.task('default', gulp.series('copy-files'));
