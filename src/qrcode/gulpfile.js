const gulp = require('gulp');  //加载gulp
const uglify = require('gulp-uglify');  //加载js压缩
const minifyCss = require('gulp-minify-css');//加载css压缩
const jshint = require("gulp-jshint");//可以用来检查JS的代码
const juicerjs = require('gulp-juicer-js');//juicer
const less = require("gulp-less");
const concat = require("gulp-concat");//合并文件
const amdOptimize = require("amd-optimize");  //关键文件 与gulp与require集成 



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