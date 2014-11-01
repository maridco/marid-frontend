var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

/**
 * Sass Task
 * @return {[type]} [description]
 */
gulp.task('sass', function() {
  return gulp.src('sass/stylesheet.scss')
              .pipe(sass())
              .pipe(autoprefixer())
              // .pipe(minifycss())
              .pipe(gulp.dest('css/'));
});

/**
 * Watch Task
 * @return {[type]} [description]
 */
gulp.task('watch', function() {
  gulp.watch(['sass/**/*.scss'], ['sass']);
});

/**
 * Default Task
 */
gulp.task('default', ['watch', 'sass']);