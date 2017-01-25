var gulp = require('gulp');
concatCSS = require('gulp-concat-css');
rename = require('gulp-rename');
minifyCSS = require('gulp-minify-css');
autoprefixer = require('gulp-autoprefixer');
livereload = require('gulp-livereload');
sass = require('gulp-sass');


gulp.task('css', function() {
    gulp.src('sass/materialize.scss')
        .pipe(sass())
        // .pipe(concatCSS("styles.css"))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css'));

});


gulp.task('depf', function() {
    gulp.src('css/styles.min.css')
        .pipe(uncss({
            html: ['app/index.html']
        }))
        .pipe(gulp.dest('app/css'));

});