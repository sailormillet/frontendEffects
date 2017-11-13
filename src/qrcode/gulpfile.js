const gulp = require('gulp');  //加载gulp
const uglify = require('gulp-uglify');  //加载js压缩
const minifyCss = require('gulp-minify-css');//加载css压缩
const jshint = require("gulp-jshint");//可以用来检查JS的代码
const juicerjs = require('gulp-juicer-js');//juicer
const less = require("gulp-less");
const concat = require("gulp-concat");//合并文件
const amdOptimize = require("amd-optimize");  //关键文件 与gulp与require集成 
// const babel = require('gulp-babel');//Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。
// const es2015 = require('babel-preset-es2015');
// const webpack = require('gulp-webpack');
// const browserify = require('browserify');//让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码browserify: 主要用于js代码模块整合编译

// const babelify    = require('babelify');//用于转化的核心库
// const source      = require('vinyl-source-stream');
// const buffer      = require('vinyl-buffer');
// const sourcemaps  = require('gulp-sourcemaps');//生成sourcemap文件
// const livereload  = require('gulp-livereload'); //gulp-livereload拯救F5！当监听文件发生变化时，浏览器自动刷新页面
//babel-preset-es2015:用于预设转化语法形式（在最新版本的node环境需要配置这个库，否则不生效，亲测！）
//
// var requirejs = require('gulp-requirejs');



const baseUrl = '../';

const amdOptimizeObj = {
    paths: {
        jquery : baseUrl + 'common/libs/jquery-2.1.0.min',
        juicer: baseUrl + 'common/libs/juicer-min',
        qrcode : baseUrl + 'common/libs/qrcode.min',
        view : './js/view',
        model :'./js/model',
        mainTpl: './js/mainTpl',
        
    },
    shim: {
        // lazyload: {
        //     deps: [
        //         'jquery',
        //     ],
        // },
        // bootstrap: {
        //     deps: [
        //         'jquery',
        //     ],
        // },
        // plupload: {
        //     exports: 'plupload'
        // }
    },
};
gulp.task('js', function() {
    gulp.src('./js/*.js')
      .pipe(amdOptimize('./control', amdOptimizeObj)) 
      .pipe(concat('qrcode.min.js'))
      // .pipe(uglify())
      // .pipe(jshint())
      // .pipe(jshint.reporter()) // 输出检查结果
      .pipe(gulp.dest('../../dist/js/'));

});

gulp.task('tpl2js', function() {
	gulp.src('./tpl/*.juicer')
			.pipe(juicerjs())
			.pipe(concat('mainTpl.js'))
			.pipe(gulp.dest('./js/'));

});

gulp.task('css', function() {
    gulp.src('./less/*.less') 
       .pipe(concat('qrcode.min.css'))
       .pipe(less())
       .pipe(minifyCss())
       .pipe(gulp.dest('../../dist/css/'));

});
gulp.task('default',['tpl2js','js','css']); 
gulp.task('watch',function(){
     gulp.watch('./**/*.*', ['js','css']);
}) 