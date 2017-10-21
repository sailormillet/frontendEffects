const gulp = require('gulp');  //加载gulp
const uglify = require('gulp-uglify');  //加载js压缩
const minifyCss = require('gulp-minify-css');//加载css压缩
const jshint = require("gulp-jshint");//可以用来检查JS的代码
const less = require("gulp-less");
const concat = require("gulp-concat");//合并文件
const amdOptimize = require("amd-optimize");  //关键文件 与gulp与require集成 
const babel = require('gulp-babel');//Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。
const browserify = require('browserify');//让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码
const source = require('vinyl-source-stream');//将Browserify的bundle()的输出转换为Gulp可用的vinyl（一种虚拟文件格式）流
// const $ = require('gulp-load-plugins')();  

const baseUrl = '../';

const amdOptimizeObj = {
    paths: {
        jquery : baseUrl + 'common/libs/jquery-2.1.0.min',
        bootstrap: baseUrl + 'common/libs/bootstrap/bootstrap.min',
        juicer: baseUrl + 'common/libs/juicer-min',

        login:  './js/login',
        
    },
    shim: {
        // lazyload: {
        //     deps: [
        //         'jquery',
        //     ],
        // },
        bootstrap: {
            deps: [
                'jquery',
            ],
        },
        // plupload: {
        //     exports: 'plupload'
        // }
    },
};

gulp.task('js', function() {
	gulp.src('./js/*.js') 
	  .pipe(amdOptimize('./js/login', amdOptimizeObj))
	  .pipe(concat('login.min.js'))
	  .pipe(babel({  
		      presets: ['es2015']  
		    }))  
   	  // .pipe(uglify())
	  // .pipe(jshint())
   //    .pipe(jshint.reporter()) // 输出检查结果
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