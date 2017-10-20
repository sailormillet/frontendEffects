#frontendEffects
>这个库作为练习用来研究写一些前端的效果,
>涉及到的知识点会一点点详细记录,
>主要用html5、css3、less、es6、jQuery、gulp压缩

##架构
- ####类库框(mvc开发思想)
   jquery、requirejs模块定义系统

- ####dist文件夹是最后生产用的文件
- ####src文件夹是开发的文件

## 编码开发

- ####编辑器 
   - sublime text3
       - 插件以及快捷键
       
        >插件安装：使用Package Control组件安装：按 Ctrl+` 调出console粘贴以下代码到底部命令行并回车：
       
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
      ```
      
      
- ####模块定义
    - CommonJS : CommonJS规范是由NodeJS发扬光大，这标志着JavaScript模块化编程正式登上舞台
    
    - AMD : 即Asynchronous Module Definition   AMD 是 RequireJS 在推广过程中对模块定义的规范化的产出（ 现在用的是AMD,AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块 ）
    
    - CMD : CMD规范是国内发展出来的，就像AMD有个requireJS，CMD有个浏览器的实现SeaJS ( CMD推崇就近依赖，只有在用到某个模块的时候再去require )
    
    
- ####版本管理

   - git github