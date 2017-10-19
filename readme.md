
#HTML marquee 标签
>该标签不是HTML3.2的一部分，只支持MSIE3以后内核，
>如有非IE内核浏览器，可能无法看到效果，
>marquee已被html5弃用*语法

```
<marquee align="left"behavior="scroll" bgcolor="#FF0000"
direction="up" height="300" width="200"hspace="50" vspace="20" loop="-1" scrollamount="10"
scrolldelay="100" onMouseOut="this.start()" onMouseOver="this.stop()">
例子
</marquee>
```

1.marquee常用两个事件:

```
onMouseOut="this.start()" ：//用来设置鼠标移出该区域时继续滚动
onMouseOver="this.stop()"：//用来设置鼠标移入该区域时停止滚动
```

2.marquee属性

|属性|简介|描述|
|-|-|-|
|align|标签内容的对齐方式|absbottom 绝对底部对齐（与g、p等字母的最下端对齐）absmiddle 绝对中央对齐 baseline 底线对齐 bottom 底部对齐（默认） left 左对齐 | middle：中间对齐|texttop：顶线对齐|top：顶部对齐|
|behavior|设定滚动的方式|alternate 在两端之间来回滚动 scroll 由一端滚动到另一端，会重复 slide 由一端滚动到另一端，不会重复|
|direction|设定活动字幕的滚动方向|down 向下 left 向左 right 向右 up 向上|
|loop|滚动的次数|loop=-1表示一直滚动下去，默认为-1|
|scrollamount|活动字幕的滚动速度|单位pixels|
|scrolldelay|活动字幕滚动两次之间的延迟时间|单位millisecond（毫秒）|

# css3 animation动画white-space

1.css
```
    .main{
        width: 100%;
        overflow: hidden;
        padding: 10px 15px;
        a{
            font-size: 16px;
            color: #f79539; 
            // display: block;
            // padding: 12px;
            text-decoration: none;
            overflow: hidden;
            text-overflow: clip;
            white-space: pre;
            animation:myfirst 5s linear 2s infinite alternate;
            /* Firefox: */
            -moz-animation:myfirst 5s linear 2s infinite alternate;
            /* Safari and Chrome: */
            -webkit-animation:myfirst 5s linear 2s infinite alternate;
            /* Opera: */
            -o-animation:myfirst 5s linear 2s infinite alternate;
        }
        @keyframes myfirst
        {
            0%   {position:relative; left:0px;}
            100% {position:relative; left:-30%;}
        }

        @-moz-keyframes myfirst /* Firefox */
        {
            0%   {position:relative; left:0px;}
            100% {position:relative; left:-30%;}
        }

        @-webkit-keyframes myfirst /* Safari and Chrome */
        {
            0%   {position:relative; left:0px;}
            100% {position:relative; left:-30%;}
        }

        @-o-keyframes myfirst /* Opera */
        {
            0%   {position:relative; left:0px;}
            100% {position:relative; left:-30%;}
        }

    }

            
```

2.text-overflow 
|属性|描述|
|-|-|
|clip|修剪文本|
|ellipsis|显示省略符号来代表被修剪的文本|
|clip|使用给定的字符串来代表被修剪的文本|

3.white-space
|属性|描述|
|-|-|
|normal|默认。空白会被浏览器忽略|
|pre|空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签|
|nowrap|文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止|
|pre-wrap|保留空白符序列，但是正常地进行换行。|
|pre-line|合并空白符序列，但是保留换行符|
|inherit|规定应该从父元素继承 white-space 属性的值|