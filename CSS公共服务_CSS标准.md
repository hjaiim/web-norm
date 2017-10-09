# css标准
## **1.三层样式**

1.base.css

  使用Normalize和css reset重置浏览器默认样式.

2.common.css

  可以复用的CSS样式.

3.page.css

  每个页面私有的css样式.

## **2.class分层**

	*  布局类：header, footer, container, main, content, aside, page, section

	*  状态类：active, current, checked, hover, fail, success, warn, error, on, off

	*  模块类：nav, prev, next, breadcrumb, forward, back, indicator, paging, first, last

	*  交互类：tips, alert, modal, pop, panel, tabs, accordion, slide, scroll, overlay,

	*  其他语义类：btn, close, ok, cancel, switch; link, title, info, intro, more, icon; form, label, search, contact, phone, date, email, user; view, loading..                           

## **3.css样式书写规范**
所有的 选择器、属性和值都使用小写,不要使用大写以及驼峰.
### **3.1css样式书写的顺序**

    1.布局定位属性

    2.自身属性

    3.文本属性

    4.其他属性,CSS3属性

示例:

<table>
        <thead>
          <tr>
            <th>布局定位属性</th>
            <th>自身属性</th>
            <th>文本属性</th>
            <th>其他属性,CSS3属性</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td style = "width:25%">
                display; list-style ; position（相应的top,right,bottom,left） ; float ;clear  ; visibility ; overflow
                </td>
                <td style = "width:25%">width ;height ; margin ; padding ; border ; background</td>
                <td style = "width:25%">color ; font ;text-decoration ;text-align;vertical-align; white- space ; break-word</td>
                <td style = "width:25%">content ; cursor ; border-radius ; box-shadow ; text-shadow ; background:linear-gradient</td>
            </tr>
         </tbody>
</table>

    注：这些属性只是最常用到的, 并不代表全部
### **3.2css样式代码缩写示例**
1.背景 background
```css
/*推荐写法*/
background:#fff url(icon.png) no-repeat fixed left top;
/*鄙视写法*/ 
background-color:#fff;
background-image:url(icon.png);
background-repeat:no-repeat;
background-attachment:fixed;
background-position:left top;
/*顺序*/
background-color | background-image | background-repeat | background-attachment | background-position
```
     注：background-size因为会有兼容性问题，最好跟background分开写。

2.边距 margin & padding
```css
/*推荐写法*/
margin:4px 0 1.5px -12px; 
/*鄙视写法*/ 
margin-top:4px;
margin-right:0;
margin-bottom:1.5px;
margin-left:-12px; 
/*顺序*/ 
margin-top | margin-right | margin-bottom | margin-left
```
    注：2个属性分别对应上下／左右，3个属性对应上／左右／下。
### **3.3css白名单**
        暂未编写。
### **3.4html白名单**
<table>
        <thead>
          <tr>
            <th>标签</th>
            <th>语义</th>
            <th>嵌套常见错误</th>
            <th>常用属性（加粗的为不可缺少的或建议的）</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td style = "width:25%">&lt;a&gt;&lt;/a&gt;</td>
                <td style = "width:25%">超链接/锚</td>
                <td style = "width:25%">a不可嵌套a</td>
                <td style = "width:25%">href,name,title,rel,target</td>
            </tr>
            <tr>
                <td>&lt;br /&gt;</td>
                <td>换行</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;button&gt;&lt;/button&gt;</td>
                <td>按钮</td>
                <td>不可嵌套表单元素</td>
                <td>type,disabled</td>
            </tr>
            <tr>
                <td>&lt;dd&gt;&lt;/dd&gt;</td>
                <td>定义列表中的定义（描述内容）</td>
                <td>只能以dl为父容器，对应一个dt</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;del&gt;&lt;/del&gt;</td>
                <td>文本删除</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;div&gt;&lt;/div&gt;</td>
                <td>块级容器</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;dl&gt;&lt;/dl&gt;</td>
                <td>定义列表</td>
                <td>只能嵌套dt和dd</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;dt&gt;&lt;/dt&gt;</td>
                <td>定义列表中的定义术语</td>
                <td>只能以dl为父容器，对应多个dd</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;em&gt;&lt;/em&gt;</td>
                <td>强调文本</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;form&gt;&lt;/form&gt;</td>
                <td>表单</td>
                <td>&nbsp;</td>
                <td><em>action</em>,target,method,name</td>
            </tr>
            <tr>
                <td>&lt;h1&gt;&lt;/h1&gt;</td>
                <td>标题</td>
                <td>从h1到h6，不可嵌套块级元素</td>
                <td>&nbsp;</td>
            </tr>                                                        
            <tr>
                <td>&lt;iframe&gt;&lt;/iframe&gt;</td>
                <td>内嵌一个网页</td>
                <td>&nbsp;</td>
                <td>frameborder,width,
                height,src,scrolling,name</td>
            </tr>
            <tr>
                <td>&lt;img/&gt;</td>
                <td>图像</td>
                <td>&nbsp;</td>
                <td><em>alt</em>,src,width,height</td>
            </tr>
            <tr>
                <td>&lt;input/&gt;</td>
                <td>各种表单控件</td>
                <td>&nbsp;</td>
                <td><em>type</em>,name,value,checked,disabled,
                maxlength,readonly,accesskey</td>
            </tr>
            <tr>
                <td>&lt;label&gt;&lt;/label&gt;</td>
                <td>标签为input元素定义标注</td>
                <td>&nbsp;</td>
                <td>for</td>
            </tr>
            <tr>
                <td>&lt;li&gt;&lt;/li&gt;</td>
                <td>列表项</td>
                <td>只能以ul或ol为父容器</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;link /&gt;</td>
                <td>引用样式或icon</td>
                <td>不可嵌套任何元素</td>
                <td><em>type,rel</em>,href</td>
            </tr>
            <tr>
                <td>&lt;meta/&gt;</td>
                <td>文档信息</td>
                <td>只用于head</td>
                <td>content,http-equiv,name</td>
            </tr>
            <tr>
                <td>&lt;ol&gt;&lt;/ol&gt;</td>
                <td>有序列表</td>
                <td>只能嵌套li</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;option&gt;&lt;/option&gt;</td>
                <td>select中的一个选项</td>
                <td>仅用于select</td>
                <td><em>value</em>,selected,disabled</td>
            </tr>
            <tr>
                <td>&lt;p&gt;&lt;/p&gt;</td>
                <td>段落</td>
                <td>不能嵌套块级元素</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;script&gt;&lt;/script&gt;</td>
                <td>引用脚本</td>
                <td>不可嵌套任何元素</td>
                <td><em>type</em>,src</td>
            </tr>
            <tr>
                <td>&lt;select&gt;&lt;/select&gt;</td>
                <td>列表框或下拉框</td>
                <td>只能嵌套option或optgroup</td>
                <td>name,disabled,multiple</td>
            </tr>
            <tr>
                <td>&lt;span&gt;&lt;/span&gt;</td>
                <td>内联容器</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;strong&gt;&lt;/strong&gt;</td>
                <td>强调文本</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;style&gt;&lt;/style&gt;</td>
                <td>引用样式</td>
                <td>不可嵌套任何元素</td>
                <td><em>type</em>,media</td>
            </tr>
            <tr>
                <td>&lt;sub&gt;&lt;/sub&gt;</td>
                <td>下标</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;sup&gt;&lt;/sup&gt;</td>
                <td>上标</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;table&gt;&lt;/table&gt;</td>
                <td>表格</td>
                <td>只可嵌套表格元素</td>
                <td>width,align,background,
                cellpadding,cellspacing,summary,border</td>
            </tr>
            <tr>
                <td>&lt;tbody&gt;&lt;/tbody&gt;</td>
                <td>表格主体</td>
                <td>只用于table</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;td&gt;&lt;/td&gt;</td>
                <td>表格中的单元格</td>
                <td>只用于tr</td>
                <td>colspan,rowspan</td>
            </tr>
            <tr>
                <td>&lt;textarea&gt;&lt;/textarea&gt;</td>
                <td>多行文本输入控件</td>
                <td>&nbsp;</td>
                <td>name,accesskey,disabled,
                readonly,rows,cols</td>
            </tr>
            <tr>
                <td>&lt;tfoot&gt;&lt;/tfoot&gt;</td>
                <td>表格表尾</td>
                <td>只用于table</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;th&gt;&lt;/th&gt;</td>
                <td>表格中的标题单元格</td>
                <td>只用于tr</td>
                <td>colspan,rowspan</td>
            </tr>
            <tr>
                <td>&lt;thead&gt;&lt;/thead&gt;</td>
                <td>表格表头</td>
                <td>只用于table</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;title&gt;&lt;/title&gt;</td>
                <td>文档标题</td>
                <td>只用于head</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;tr&gt;&lt;/tr&gt;</td>
                <td>表格行</td>
                <td>嵌套于table或thead、tbody、tfoot</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>&lt;ul&gt;&lt;/ul&gt;</td>
                <td>无序列表</td>
                <td>只能嵌套li</td>
                <td>&nbsp;</td>
            </tr>
        </tbody>
</table>

## **4.css选择器命名规范**

禁止使用id书写样式,应为id具有唯一性.
命名要语义化,禁止出现拼音,中文,特殊符号.

1.连字符CSS选择器命名规范
 长名称或词组可以使用"-"来为选择器命名.

 不要使用“_”下划线来命名CSS选择器

2.class的命名方法：使用单个字母+"-"为前缀
    - 布局（grid）（.g-）：将页面分割为几个大块，通常有头部、主体、主栏、侧栏、尾部等！
        -- ".g-" + 这一块的名字
    - 模块（module）（.m-）：通常是一个语义化的可以重复使用的较大的整体！比如导航、登录、注册、各种列表、评论、搜索等！
        -- ".m-" + 模块名
    - 状态（.z-）：为状态类样式加入前缀，统一标识，方便识别，她只能组合使用或作为后代出现（.u-ipt.z-dis{}，.m-list li.z-sel{}），
        --".z-" + 状态名
```css
 //布局命名
 .g-head{}

 .g-nav{}

 .g-banner{}

 .g-content{}

 .g-footer{}
...

 //模块命名
 .m-register{}
 .m-login{}
 ...
 //状态命名
 .u-ipt.z-dis{}
 .m-list li.z-sel{}
```

> 注：在你样式中的选择器总是要以上面前五类开头，然后在里面使用后代选择器。
        如果这五类不能满足你的需求，你可以另外定义一个或多个大类，但必须符合单个字母+"-"为前缀的命名规则，即 .x- 的格式。
        特殊：.j-将被专用于JS获取节点，请勿使用.j-定义样式。

### **5.模块和元件的扩展类的命名方法**

使用扩展类有两种:

  1. 在原类名后面加 "-"+"数字或字母".

   示例:
   ```css
  .m-list{}
  .m-list-2{} //.m-list的扩展命名
  .m-list-3{} //.m-list的扩展命名
  .m-list-4{} //.m-list的扩展命名


   ```
   2. 在原类名后面加 "-"+"状态",然后像这样使用：class="u-btn u-btn-dis"。

   分组选择器有时可以代替扩展方法
```css
  //代表不同状态的扩展名名
  .u-btn{}
  .u-btn-hov{}//.u-btn的扩展命名

```
有些模块很相似,但是不希望都有依赖关系就可以使用分组选择器.

示例:
```css
/* 两个元件共性的样式 */
.u-tip1,.u-tip2{}
.u-tip1 .itm,.u-tip2 .itm{}
/* 在分别是两个元件各自的样式 */
/* tip1 */
.u-tip1{}
.u-tip1 .itm{}
/* tip2 */
.u-tip2{}
.u-tip2 .itm{}
```

> 补充：基类自身可以独立使用（如：class="m-list"即可），扩展类必须基于基类使用（如：class="m-list m-list-2"）。

### **6.防止污染和被污染**
避免重复命名.慎用标签选择器.

## **7.浏览器兼容前缀规范**

   - -moz-     /* 火狐等使用Mozilla浏览器引擎的浏览器 */
   - -webkit-  /* Safari, 谷歌浏览器等使用Webkit引擎的浏览器 */
   - -o-       /* Opera浏览器 */
   - -ms-      /* Internet Explorer */
```css
//示例
-moz-border-radius: 10px; 
-webkit-border-radius: 10px; 
-o-border-radius: 10px; 
border-radius: 10px; 
```



    主要的需要添加浏览器引擎前缀(vendor-prefix)的属性包括：
    
    @keyframes
    
    移动和变换属性(transition-property, transition-duration, transition-timing-function, transition-delay)
    
    动画属性 (animation-name, animation-duration, animation-timing-function, animation-delay)
    
    border-radius
    
    box-shadow
    
    backface-visibility
    
    column属性
    
    flex属性
    
    perspective属性
    
    gradient（系列）  line-clamp box-orient linear-gradient
    
    box-size 
    
    input-placeholder
   
    justify-content 
    
    overflow-scrolling 
    
    perspective
    
    user-select
兼容前缀用法示例示例：
```css  
/* 简单属性 */
.myClass {
	-webkit-animation-name: fadeIn;
	-moz-animation-name: fadeIn;
	-o-animation-name: fadeIn;
	-ms-animation-name: fadeIn;
	animation-name: fadeIn;  /* 不带前缀的放到最后 */
	}
/* 复杂属性 keyframes */
@-webkit-keyframes fadeIn {
	0% { opacity: 0; } 
	100% { opacity: 0; }
	}
@-moz-keyframes fadeIn {
	0% { opacity: 0; }
        100% { opacity: 0; }
        }
@-o-keyframes fadeIn {
	0% { opacity: 0; } 
	100% { opacity: 0; }
	}
@-ms-keyframes fadeIn {
	0% { opacity: 0; } 
	100% { opacity: 0; }
	}
/* 不带前缀的放到最后 */
@keyframes fadeIn {
	0% { opacity: 0; } 
	100% { opacity: 0; }
	}
```

# 可复用的代码段
## **1.base.css**
 <a href="./relase/base.css">点击查看代码</a>
## **2.过度效果**
 <a href="./relase/pop.rar">点击下载代码</a>

 参考链接

 https://tympanus.net/Development/ModalWindowEffects/

 http://www.htmleaf.com/Demo/20141011139.html

 https://isux.tencent.com/css3/tools.html
## **3.垂直,水平居中**

1. 绝对定位

	1.margin: auto(高度与宽度已知)

	2.负外边距(高度与宽度已知)

	3.trasform反向偏移（高度与宽度未知）

    <a href="./relase/center-absolute.html">点击查看代码</a>

2. flexbox（高度与宽度未知，但是要注意兼容性）

  <a href="./relase/center-flexbox.html">点击查看代码</a>

3. 表单单元格（高度与宽度未知）

<a href="./relase/center-table.html">点击查看代码</a>

## **4.不规则图形**
1. 三角型

    ![](/relase/images/Image.png)

    <a href="./relase/triangle.html">点击查看代码</a>

2. 五角星

     ![](/relase/images/5.png)

   <a href="./relase/star-five.html">点击查看代码</a>

3. 实心箭头

    ![](/relase/images/solid-arrow.png)

    <a href="./relase/solid-arrow.html">点击查看代码</a>

4. 转弯箭头

     ![](/relase/images/curve-arrow.png)

    <a href="./relase/curve-arrow.html">点击查看代码</a>

5. 空心箭头

    ![](/relase/images/1.png)

    <a href="./relase/hollow-arrow.html">点击查看代码</a>

6. bubble弹出框

    ![](/relase/images/bubble.png)

    <a href="./relase/bubble.html">点击查看代码</a>

7. 对勾  X号  放大镜

    ![](/relase/images/6.png)

    <a href="./relase/checklist.html">点击查看代码</a>

8. 加号

    ![](/relase/images/3.png)

    <a href="./relase/cross.html">点击查看代码</a>

9. 书签

    ![](/relase/images/4.png)

    <a href="./relase/bookmark.html">点击查看代码</a>

9. 弧度背景

    ![](/relase/images/2.png)

    <a href="./relase/bubble.html">点击查看代码</a>

## **5.盒模型常用样式**



## **6.瀑布流布局**

   ![](/relase/images/pubu.png)

   <a href="./relase/column.html">点击查看代码</a>

   参考链接 https://segmentfault.com/a/1190000003748570
## **7.loading动画**

   <a href="./relase/loading.rar">点击下载代码</a>

   参考链接：https://connoratherton.com/loaders

## **8.Tip小圆点**

   <a href="./relase/tip.rar">点击下载代码</a>

   参考链接 http://d.lanrentuku.com/down/js/daohang-1214/

# **常用写法的代码模板**
## **1.PC端**

 1.1 pc端管理平台模板

    模板中包括了导航栏，tab切换，以及状态栏

   ![](/relase/images/pc.jpg)


   *<a href="./relase/module/pc端管理平台模板.rar">点击下载代码</a>*

 1.2 pc端滑屏页面

    使用jquery.fullPage.min.js和jquery.fullpage.min.css插件，html结构简单，滚动鼠标，页面滑动一整屏,方便操作

   ![](/relase/images/swiper.jpg)

   *<a href="./relase/module/pc端滑屏页面.rar">点击下载代码</a>*
## **2.移动端**

 2.1 单屏模板

    手机端的单屏页面，模板中包括了scale缩放，内容不设置宽高的绝对居中

   ![](/relase/images/mobile.jpg)


   <!--<a href="./relase/oneScreen.html">点击查看代码</a>-->

   *<a href="./relase/module/单屏模板.rar">点击下载代码</a>*

 2.2 单屏页面

    此单屏页面不同于上面一种，该结构底部固定，当内容高度大于屏幕高度时，内容这块会出现滚动条。模板中还引用了swiper轮播图，使用事需引用swiper.min.css，swiper.min.js和zepto.js或jquery.js

   ![](/relase/images/mobile1.jpg)


   *<a href="./relase/module/移动端单屏幕页面.rar">点击下载代码</a>*
##  **3.自适应**
3.1 自适应滑屏页面

    此模板是单屏滑动页面，包括点击按钮到下一页，和返回顶部

   ![](/relase/images/self-adaption.jpg)

 *<a href="./relase/module/自适应滑屏页面.rar">点击下载代码</a>*

3.2 弹窗模板

    弹窗模板包括了很多弹窗出现的形式，缩放，改变透明，翻转等等效果。
   *<a href="./relase/module/弹窗模板.rar">点击下载代码</a>*
<!--
## **2.滑屏页面**

   1.swipper.js实现方案

   <a href="./relase/swiper.html">点击查看代码</a>

   >注:水平滑动只需将  direction的值改成“horizontal”,或者不传此参数，默认就是水平滑动

   2.fullPage.js实现方案

   fullPage.js 是一个基于 jQuery 的插件，它能够很 方便、很轻松的制作出全屏网站

   <a href="./relase/fullPage.html">点击查看代码</a>

   3.touchSwipe.js实现方案

  jquery.touchSwipe.js插件，适合手机客户端手势上下滑屏的jQuery插件
  压缩后只有11KB大小

   <a href="./relase/touchSwiper.html">点击查看代码</a>

## **3.scal缩放**



 ## **4.滑动门效果**
 模仿京东的滑动门

 ![](/relase/images/jd.png)

 <a href="./relase/jingdong.html">点击查看代码</a>

 纯css控制的滑动门

 通过input type=checkbox 和 label标签结合实现的，label被点击，对应id的input被选中，这样就可以通过css选择器来控制相应的显示隐藏了以及先关样式的调整。

 ![](/relase/images/sliderDoor.png)

 <a href="./relase/slide.html">点击查看代码</a>

-->

 ## **媒体查询**
 ```css
   @media (device-height:568px) and (-webkit-min-device-pixel-ratio:2){/* 兼容iphone5 */}
         @media only screenand(max-device-width:480px){ }
         @media only screenand(min-device-width:481px){ }/*6*/
         @media (min-device-width:375px)and(max-device-width:667px)and(-webkit-min-device-pixel-ratio:2){ }/*6+*/
         @media (min-device-width:414px)and(max-device-width:736px)and(-webkit-min-device-pixel-ratio:3){ }/*魅族*/
         @media only screenand(min-device-width:1080px)and(-webkit-min-device-pixel-ratio:2.5){ }/*mate7*/
         @media only screenand(min-device-width:1080px)and(-webkit-min-device-pixel-ratio:3){ }/*4 4s*/
         @media only screenand(device-height:480px)and(-webkit-device-pixel-ratio:2){ }
         @media screenand(min-width:320px)and(max-width:480px) { }/* 平板之类的宽度 1024 以下设备 */
         @media only screenand(min-width:321px)and(max-width:1024px) { body { background: blue; } }/* PC客户端或大屏幕设备: 1028px 至更大 */
         @media only screenand(min-width:1029px) { body { background: green; } }/* 竖屏 */
         @media screenand(orientation:portrait)and(max-width:720px) {对应样式}/* 横屏 */
         @media screenand(orientation:landscape){对应样式} iPhone5s504*32

 ```
## **微信、支付宝内置浏览器宽高**

>注:在微信中导航栏+iphone状态栏高度为64px.

 iphone4

>屏幕总宽度: 320px
>
>屏幕总高度: 480px
>
>微信网页可视高度: 416px



iphone5

>屏幕总宽度: 320px
>
>屏幕总高度: 568px
>
>微信网页可视高度: 504px


iphone6

>屏幕总宽度: 375px
>
>屏幕总高度: 667px
>
>微信内网页可视高度: 603px


iphone6 plus
>
>屏幕总宽度: 414px
>
>屏幕总高度: 736px
>
>微信网页可视高度: 672px

samsung galaxy note3
>
>导航栏+Android状态栏高度： 73px
>
>屏幕总宽度: 360px
>
>屏幕总高度: 640px
>
>微信网页可视高度: 567px


#条件注释

####Css if hack条件语法

`<!--[if !IE]><!--> 除IE外都可识别 <!--<![endif]-->`

`<!--[if IE]> 所有的IE可识别 <![endif]-->`

`<!--[if IE 6]> 仅IE6可识别 <![endif]-->`

`<!--[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]-->`

`<!--[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]-->`

`<!--[if IE 7]> 仅IE7可识别 <![endif]-->`

`<!--[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]-->`

`<!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->`

`<!--[if IE 8]> 仅IE8可识别 <![endif]-->`

`<!--[if IE 9]> 仅IE9可识别 <![endif]-->`






| 项目    | 实例     | 说明   |
| ------- :|:-------:|: ------: |
| !  		|   [if !IE]   					| NOT运算符。这是摆立即在前面的功能，操作员，或子表达式扭转布尔表达式的意义。|
| lt  		|   [if lt IE 5.5]   			| 小于运算符。如果第一个参数小于第二个参数，则返回true。|
| lte  		|   [if lte IE 6]   			| 小于或等于运算。如果第一个参数是小于或等于第二个参数，则返回true。|
| gt  		|   [if gt IE 5]   				| 大于运算符。如果第一个参数大于第二个参数，则返回true。|
| gte  		|   [if gte IE 7]   			| 大于或等于运算。如果第一个参数是大于或等于第二个参数，则返回true。|
| ( )  		|   [if !(IE 7)]   				| 子表达式运营商。在与布尔运算符用于创建更复杂的表达式。|
| & 		|   [if (gt IE 5)&(lt IE 7)]   | AND运算符。如果所有的子表达式计算结果为true，返回true|
| 	\ 		|   [if (IE 6)|(IE 7)]  		| OR运算符。返回true，如果子表达式计算结果为true。|




#常用的Meta标签写法和作用

PC端meta标签
```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>//优先使用 IE 最新版本和 Chrome
<meta name="robots" content="index,follow"/>//搜索引擎抓取
<meta name="description" content="不超过150个字符"/>//页面描述0
<meta name="keywords" content=""/>//页面关键字
<meta name="renderer" content="webkit">//360浏览器默认急速
```
移动端meta标签
```html
<meta http-equiv="Cache-Control" content="no-siteapp" />//禁止百度转码
<meta name ="viewport" content ="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
<meta name="screen-orientation" content="portrait">//uc强制竖屏；
<meta name="x5-orientation" content="portrait">//QQ强制竖屏；
<meta name="full-screen" content="yes">//UC强制全屏；
<meta name="x5-fullscreen" content="true">//QQ强制全屏
<meta name="browsermode" content="application">//UC应用模式
<meta name="x5-page-mode" content="app">//QQ应用模式;
<meta content="telephone=no" name="format-detection"/>
<meta content="email=no" name="format-detection" />
```











