<<<<<<< HEAD
// including plugins
var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
// var less = require('gulp-less')
var to5 = require('gulp-6to5')
var path = require('path')
=======
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify')
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0

gulp.task('css', function(){
    return gulp.src(
            [
<<<<<<< HEAD
                './public/css/bootstrap.css',
                './public/css/style.css',
                './public/css/swiper.css',
                './public/css/dark.css',
                './public/css/font-icons.css',
                './public/css/animate.css',
                './public/css/magnific-popup.css',
                './public/css/responsive.css',
                './public/css/custom.css'
=======
                './assets/css/bootstrap.css',
                './assets/css/stack-interface.css',
                './assets/css/socicon.css',
                './assets/css/lightbox.min.css',
                './assets/css/flickity.css',
                './assets/css/jquery.steps.css',
                './assets/css/theme.css',
                './assets/css/custom.css',
                './assets/css/font-roboto.css'
>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
            ]
        )
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(gp_concat('style.min.css'))
<<<<<<< HEAD
        .pipe(gulp.dest('./public/dist/css/'))
})

gulp.task('copy-fonts', function(){
    return gulp.src(
            ['./public/css/fonts/**']
        )
        .pipe(gulp.dest('./public/dist/css/fonts/'))
})

gulp.task('style', ['css', 'copy-fonts'], function(){})


gulp.task('js', function(){
    return gulp.src(
            [
                './public/js/jquery.js',
                './public/js/plugins.js',
                './public/js/functions.js',
                './public/js/custom.js'
            ]
        )
        .pipe(gp_concat('vendor.min.js'))
        .pipe(gulp.dest('./public/dist/js/'))
        .pipe(gp_rename('vendor.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./public/dist/js/'))
});

gulp.task('es6-es5', ['js'], function(){
    return gulp.src([
                './src/*/**.js',
                './src/*/*/**.js'
            ]
        )
        .pipe(to5())
        .pipe(gulp.dest('./public/dist/es5/'))
});

gulp.task('watch', function() {
    gulp.watch(['./src/*/**.js', './src/*/*/**.js', './public/js/**.js'], ['es6-es5'])
})

gulp.task('prod', ['style', 'es6-es5'], function(){})

gulp.task('default', ['es6-es5', 'watch'], function(){})
=======
        .pipe(gulp.dest('./dist/css/'))
})

gulp.task('copy', function(){
    return gulp.src(
            ['./assets/fonts/**']
        )
        .pipe(gulp.dest('./dist/fonts/'))
})

gulp.task('build', function(){
    return gulp.src(
            [
                './assets/js/jquery-3.1.1.min.js',
                './assets/js/flickity.min.js',
                './assets/js/easypiechart.min.js',
                './assets/js/parallax.js',
                './assets/js/typed.min.js',
                './assets/js/datepicker.js',
                './assets/js/isotope.min.js',
                './assets/js/ytplayer.min.js',
                './assets/js/lightbox.min.js',
                './assets/js/granim.min.js',
                './assets/js/jquery.steps.min.js',
                './assets/js/countdown.min.js',
                './assets/js/twitterfetcher.min.js',
                './assets/js/spectragram.min.js',
                './assets/js/smooth-scroll.min.js',
                './assets/js/scripts.js',
            ]
        )
        .pipe(gp_concat('vendor.min.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(gp_rename('vendor.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./dist/js/'))
})

gulp.task('prod', ['build', 'css', 'copy'], function(){})

gulp.task('default', ['build', 'css', 'copy'], function(){})

>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
