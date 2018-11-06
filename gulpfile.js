var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var server = require('gulp-webserver');
var path = require('path');
var url = require('url');
var fs = require('fs');

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8888,
            open: true
        }))
})