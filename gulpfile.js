const gulp = require('gulp');
const watch = require('gulp-watch')
const cssMin = require('gulp-css');
const rename = require("gulp-rename");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));

/* Sass */
gulp.task('sass', function () {
    return gulp.src([
        'assets/src/scss/app.scss'
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('assets/dist/css'));
});

/* CSS */
gulp.task('css', function () {
    return gulp.src('assets/dist/css/app.css')
        .pipe(concat('app.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssMin())
        .pipe(gulp.dest('assets/dist/css/'))
});

/* JS */
gulp.task('js', function () {
    return gulp.src([
        /* Add here 3rd party vendor JS if needed */
        /*'assets/src/js/vendor/swiper-bundle.min.js',*/
        'assets/src/js/vendor/slinky.min.js',
        'assets/src/js/vendor/swiper-bundle.min.js',
        'assets/src/js/app.js'
    ])
        .pipe(concat('app.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('assets/dist/js/'));
});

/* Dev */
gulp.task('dev', gulp.series('sass', 'css', 'js'));

/* Watch */
gulp.task('watch', function () {
    gulp.watch('assets/src/js/**/*.js', gulp.series('js'));
    gulp.watch('assets/src/scss/**/*.scss', gulp.series('sass', 'css'));
});