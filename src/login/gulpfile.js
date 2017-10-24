const gulp = require('gulp');  //加载gulp
const uglify = require('gulp-uglify');  //加载js压缩
const minifyCss = require('gulp-minify-css');//加载css压缩
const jshint = require("gulp-jshint");//可以用来检查JS的代码
const less = require("gulp-less");
const concat = require("gulp-concat");//合并文件
const amdOptimize = require("amd-optimize");  //关键文件 与gulp与require集成 

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
		      presets: ['env']  
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