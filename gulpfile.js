var gulp = require('gulp')
var sourdough = require('gulp-sourdough')
var browserSync = require('browser-sync')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var reload = browserSync.reload
var csso = require('gulp-csso')
var uglify = require('gulp-uglify')

gulp.task('css', function() {
  gulp.src('app/assets/styl/index.styl')
    .pipe(sourdough())
    .pipe(gulp.dest('app/assets/dist/'))
    .pipe(reload({stream:true}))
})

gulp.task('css-prd', function() {
  gulp.src('app/assets/styl/index.styl')
    .pipe(sourdough())
    .pipe(csso())
    .pipe(gulp.dest('app/assets/dist/'))
})


gulp.task('js', function () {
  return browserify('app/assets/js/index.js', { debug: true })
    .transform(babelify.configure())
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulp.dest('app/assets/dist/'))
    .pipe(reload({stream:true}))
})

gulp.task('js-prd', function () {
  return browserify('app/assets/js/index.js', { debug: false })
    .transform(babelify.configure())
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('app/assets/dist/'))
})

gulp.task('go', ['css-prd', 'js'], function() {
  browserSync.init({
    proxy: 'localhost:3500',
    port: 3501,
    open: false
  })
  gulp.watch("app/assets/styl/**/*.styl", ['css-prd'])
  gulp.watch("app/assets/js/**/*.js", ['js'])
  gulp.watch("app/views/**/*.jade").on('change', reload)
})

gulp.task('dev', ['go'])
gulp.task('build', ['css-prd', 'js-prd'])
