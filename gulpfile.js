var gulp = require('gulp');
var header = require('gulp-header');
var footer = require('gulp-footer');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

function getHeader(){
    return ['if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){\n'
            ,'    module.exports = "sakana.mojier";\n'
            ,'}\n'
            ,'(function(angular){\n'
            ,'"use strict";\n'].join("");
}

function getFooter(){
    return ['})(window.angular);'].join();
}

gulp.task('default',['build']);

gulp.task('build',function(){

    return gulp.src('source/*.js')
               .pipe(concat('mojier.js'))
               .pipe(header(getHeader()))
               .pipe(footer(getFooter()))
               .pipe(gulp.dest('release'));
});

gulp.task('browserify',function(){
    return browserify({
        entries:['./release/mojier.js']
    }).bundle()
        .pipe(source("mojier.js"))
        .pipe(gulp.dest('release'));
});


