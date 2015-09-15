// 安装插件
// sudo npm install gulp-jshint  gulp-sass gulp-concat gulp-uglify gulp-util gulp-rename gulp-cssmin gulp-imagemin gulp-replace md5-file imagemin-pngquant imagemin-jpegtran --save-dev
var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    sass        = require('gulp-ruby-sass'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    cssmin      = require('gulp-cssmin'),
    imagemin    = require('gulp-imagemin'),
    gutil       = require('gulp-util'),
    pngquant    = require('imagemin-pngquant'),
    jpegtran    = require('imagemin-jpegtran'),
    prefix      = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    jade        = require('gulp-jade'),
    path        = require('path'),
    px2rem      = require('gulp-px2rem'),
    wrap        = require('gulp-wrap-amd');

var paths = {
    js: 'views/*.js',
    img: 'images/*.png',
    sass: 'css/_sass/*',
    jade: 'templates/_jade/*.jade',
    css: 'css/*.css'
}

var output = {
    js: 'views',
    img: 'images',
    css: 'css',
    template: 'templates'
}

gulp.task('jade', function () {
  return gulp.src(paths.jade)
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(output.template))
})

// 检查js语法
gulp.task('lint', function() {
    gulp.src(paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 编译Sass
gulp.task('sass', function() {
    return sass('css/_sass/',{style: 'compressed'})
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(px2rem({
        replace: true
    }))
    .pipe(prefix('ios 6', 'android  4'))
    .pipe(gulp.dest(output.css));
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.jade, ['jade']);
});

// 默认任务
gulp.task('default', ['watch', 'sass', 'jade']);

