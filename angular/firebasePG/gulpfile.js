var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    livereload: true
  });
});

gulp.task('html', function(){
  gulp.src('./angular/**/*.*')
    .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch(['./angular/**/*.*'], ['reload']);
});

gulp.task('default', ['connect', 'watch']);


// 'use strict';
//
// var gulp = require('gulp');
//
// require('require-dir')('./gulp');
//
// gulp.task('default', ['clean'], afunction(){
//     gulp.start('build');
// });
