#frontendEffects
>这个库作为练习用来研究写一些前端的效果,主要采用AMD模块化开发
>涉及到的知识点会一点点详细记录,
>主要用html5、css3、less、es6、jQuery、bootstrap、gulp压缩、juicer模版渲染

##架构
- ####类库框(mvc开发思想)
   jquery、requirejs模块定义系统

- ####dist  为生产环境目录，包含CSS、JavaScript、图片素材 和 用于演示的Html文件。
     - html    
     - 压缩后的css
     - 压缩后的js 
     

- ####src 存放 Less、JavaScrip文件源码 和 第三方库文件。
     - common 
         - 第三方库文件
   

## 编码开发

- ####编辑器 
   - sublime text3
       - 插件以及快捷键
       
        >插件安装：使用Package Control组件安装：
        > 按 Ctrl+` 调出console粘贴以下代码到底部命令行并回车：
        
       
       ```    

        import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())

       ```
      

       >重启Sublime Text 3。如果在Perferences->package settings中看到package control这一项，则安装成功。按下Ctrl+Shift+P调出命令面板输入install 调出 Install Package 选项并回车，然后在列表中选中要安装的插件。
       
       ```
       1.Sublime Terminal
       可以让你在Sublime中直接使用终端打开你的项目文件夹，即可使用快捷键Ctrl+Shift+T呼出命令行窗口。
       
       2.Emmet插件
       输入标签简写形式，然后按Tab键
       
       3.JsFormat插件
       同样使用Package Control安装JsFormat插件后，Ctrl+Alt+F对JS进行格式化
       
       4.TrailingSpaces插件
       TrailingSpaces这款插件能高亮显示多余的空格和Tab
       
       5.Tag插件
       这是HTML/XML标签缩进、补全、排版和校验工具
       
       6.CssComb插件
       在CSS文件中按快捷键Ctrl+Shift+C
       
       7.Autoprefixer插件
       CSS3私有前缀自动补全插件，在输入CSS3属性后（冒号前）按Tab键，
       
       8.Markdown Preview
       Ctrl+Shift+P调出命令面板，输入mdp，浏览器中预览markdown文件。 
       
       9.Markdown Editing


       ```
    - sublime text3
       - 插件以及快捷键

       
- ####效率工具

   - gulp
      - gulp用到的插件
      
      
      ```
      const gulp = require('gulp');  //加载gulp
      const uglify = require('gulp-uglify');  //加载js压缩
      const minifyCss = require('gulp-minify-css');//加载css压缩
      const jshint = require("gulp-jshint");//可以用来检查JS的代码
      const less = require("gulp-less");//编译less
      const concat = require("gulp-concat");//合并文件
      const htmlminify = require('gulp-html-minify');//压缩html
      const imagemin = require('gulp-imagemin');//压缩图片
      const amdOptimize = require("amd-optimize");//关键文件 与gulp与require集成 
      const babel = require('gulp-babel');//Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。
const browserify = require('browserify');//让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码

      安装 gulp-babel
      //Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。
      npm install --save-dev gulp-babel babel-preset-es2015
      其中babel -preset-es2015 是ES2015转码规则，如果代码中含有es7的内容，可以继续安装ES7不同阶段语法提案的转码规则
      # ES2015转码规则
      $ npm install --save-dev babel-preset-es2015

      # react转码规则
      $ npm install --save-dev babel-preset-react

      browserify
      让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码

      vinyl-source-stream
      将Browserify的bundle()的输出转换为Gulp可用的vinyl（一种虚拟文件格式）流
      ```
      
      
- ####模块定义
    - CommonJS : CommonJS规范是由NodeJS发扬光大，这标志着JavaScript模块化编程正式登上舞台
    
    - AMD : 即Asynchronous Module Definition   AMD 是 RequireJS 在推广过程中对模块定义的规范化的产出（ AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块 ）
    
    - CMD : CMD规范是国内发展出来的，就像AMD有个requireJS，CMD有个浏览器的实现SeaJS ( CMD推崇就近依赖，只有在用到某个模块的时候再去require 
    
    - UMD: 通用模块规范,既然CommonJs和AMD风格一样流行，似乎缺少一个统一的规范。所以人们产生了这样的需求，希望有支持两种风格的“通用”模式，于是通用模块规范（UMD）诞生了。
    
    
- ####版本管理

   - git github

- 配置命令行HTTP服务器 - http-server (nodeJs)
  - npm install http-server 
  - sudo node http-server路经 静态资源路经