const gulp = require('gulp');  //加载gulp
const uglify = require('gulp-uglify');  //加载js压缩
const minifyCss = require('gulp-minify-css');//加载css压缩
const jshint = require("gulp-jshint");//可以用来检查JS的代码
const less = require("gulp-less");
const concat = require("gulp-concat");//合并文件

gulp.task('js', function() {
	gulp.src('./js/*.js') 
	  .pipe(concat('login.min.js'))
   	  .pipe(uglify())
	  .pipe(jshint())
      .pipe(jshint.reporter()) // 输出检查结果
      .pipe(gulp.dest('../../dist/js/'));

});

gulp.task('css', function() {
	gulp.src('./less/*.less') 
	   .pipe(concat('login.min.css'))
	   .pipe(less())
	   .pipe(minifyCss())
       .pipe(gulp.dest('../../dist/css/'));

});
gulp.task('default',['js','css']); 
gulp.task('watch',function(){
     gulp.watch('./**/*.*', ['js','css']);
}) 