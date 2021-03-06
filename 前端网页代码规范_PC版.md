# 前端网页代码规范_PC版

## 一、基础规范

### 示例
   ``` html
       <!DOCTYPE html>
       <html lang="zh-CN">
       <head>
       	<meta charset="utf-8">
       	<meta name="robots" content="all">
       	<meta name="author" content="HuanWu-H5">
       	<meta name="Copyright" content="HuanWu">
       	<meta name="Description" content="">
       	<meta name="Keywords" content="">
       	<title>页面标题</title>
       	<link href="./css/common.css" rel="stylesheet">
       </head>
       <body>
       <div>DOM内容</div>
       <script src="./js/main.js"></script>
       </body>
       </html>
   ```

#### **doctype**
>注：文档类型统一使用html5的doctype
   ```
   <!DOCTYPE html>
   ```
#### **页面编码**
>注：编码统一使用utf-8
   ```
   <meta charset="utf-8" />
   ```
#### **Author、Copyright**
   ```
   <meta name="author" content="HuanWu-H5" />
   <meta name="Copyright" content="HuanWu" />
   ```


#### **Description和Keywords**
>注：Description值一般为页面标题或主题，针对该页面主题的说明。Keywords为产品名、专题名、专题相关名词，之间用英文半角逗号隔开。（关键字与描述找产品要，如果没有复制官网的描述和关键字）
   ```
   <meta name="Description" content="" />
   <meta name="Keywords" content="" />
   ```

#### **title**
   ```
    <title>登录 - 幻舞官网</title>
   ```

#### **页面说明注释**
>注：在head区域中加上对页面相关人员注释
   ```
    <!-- 页面制作：name | 创建：xxxx-xx-xx -->
   ```

#### **CSS引入方式**
>注：公用部分css提取出来放入单独的CSS文件中，(注意链接地址使用相对路径时，同级文件前面不要省略./),无论是何种引入方式，必须在head区域内引用
   ```
   <link href="./css/comm.css" rel="stylesheet" />
   ```

#### **页面文字**
>注：中文字体说明：出于有可能乱码而导致字体解析错误的原因，font-family中用到中文字体时，建议优先使用unicode码方式，英文别名方式为备选方案禁止使用中文方式
   ```
   body{font:12px/1.5 HanHeiSC,PingFang SC,Helvetica Neue,Helvetica,STHeitiSC-Light,'\5b8b\4f53',Arial,sans-serif;}
   font-family:'\5FAE\8F6F\96C5\9ED1';   /*推荐*/
   font-family:'Microsoft Yahei';        /*备选*/
   ```


#### **文本内容**

>注：页面上没有做特殊效果，后期需要修改的内容，如：时间、名称、规则内容等，尽量用文本内容来实现，不要切在背景中


#### **样式名**
>注：所有xhtml标签、css、class、id都需小写。class、id命名要有意义。可以是英文或拼音的缩写。能通过名称看出元素的大概用途。 需要联调的部分，不要用ID的形式定义样式，以免ID名变化，引起页局错乱。


#### **ID名**
>注：所有需要在js中获取并引用的标签，加上id名，不要用cssName进行获取，以免修改样式时分不清。


#### **链接**

* 给重要的 <a> 标签加上title，特别是需要联调的部分；
* 必须给链接加地址，同风格的内页，直接刷新本页，不要用打开新页面的形式；
* 产品要求点击提示“敬请期待！”的，如有标准化ui，使用标准化UI提示框，如果没有，代码统一用href="javascript:alert('敬请期待！')"的形式，


#### **其他**
>注：代码内不可有过多无意义空格、换行，tab缩进允许。


### 二、文件规范

#### 文件目录

* 存放资源的目录命名规范：./assets
* 存放图片的目录：./assets/imges
* 存放css的目录：./assets/css
* CSS文件命名如：./assets/css/comm.css
* JS文件(非必须，框架、公用js的放到该目录)：./libs
* JS文件命名如：./libs/comm.js


#### 文件命名

* html首页、引导页命名为index.html
* html内页，有明显分类的，按英文或拼命首字母命名，无明确意义的，可用page01.htm、page02.htm
* 注意：所有文件名统一使用小写


### 三、图片规范

1. 图片标签图片标签必须写上宽度、高度和alt属性，宽高为图片的原大小。<br>
   例如：```<img src="" width="500" height="200" alt="活动奖品建筑排程卡"/>```
2. 图片质量图片体积不能超过150K，图片格式包括.jpg/.gif/.png
3. jpg图片必须压缩，一般60%品质即可，如果图片质量不好，可提高到80%
4. 透明PNG32图片必须用压缩工具压缩后提供，点击下载工具。

#### 切图要求

* 合并当前页面中出现的小图片，尽可能减少页面请求数；
* 辅助图片（修饰、间隔、提醒的图片）作为背景图处理，通过css的background定义；
* 各类按钮、文字、标题要尽量从背景中分离；能重复利用的部分尽量提取；
* 页面需具有扩展性，特殊情况除外；
* 合理切图，需要程序后台动态生成的图片，必须单独切割出来；


#### 路径分离

* 非vue项目采用相对路径，vue项目css文件中的路径采用相对路径，页局中的路径采用绝对路径
* 链接地址，下载地址等，采用js配置文件的形式，尽量避免写死路径

### 四、测试标准

>浏览器兼容性测试兼容IE6、IE7、IE8、IE9、Firefox、chrome，TT浏览器。并且拖大和缩小窗口，页面布局不会发生错位；

>显示器分辨率测试1024x768、1440x900

#### 可读性测试

* 在屏蔽js、css后，页面要仍然具有良好的可读性。
* 表现与结构分离，代码中不要涉及表现元素，如：style、font、bgColor、border等。
* 选用恬当的元素，标题使用h1~h6，h1为网页一级标题，一个页面中只出现一次；
* 分大块使用div，段落使用p。数据列表使用table/ul/ol/dd等，关键字使用strong

#### 检查工具
>chrome插件检查工具页面完成后，请先使用互娱cp页面检测插件对完成页面自检，无问题后再进行后续流程。

1. [cpexp插件功能]<http://tgideas.qq.com/cpexp/chrome-exten/>：
* 检测页面标题规范
* 页面关键字、描述、编码
* 专题目录是否符合规范
* 检查页面链接是否为空连接，图片是否分离，是否添加alt和width、height属性
* 检查点击流、top条、foot是否添加
* 腾讯视频参数是否添加outhost等

2. [exe程序检查工具]<http://tgideas.qq.com/cpexp/checkhtml/update.shtml>：
* 检测页面标题规范
* 检测页面关键字、描述、编码
* 检测页面链接是否为空连接，图片是否分离，是否添加alt属性
* 检测点击流、top条、foot是否添加
* 检测样式图片是否分离

### 五、CSS补充

#### 初始化方案
>注意！ 使用时，按需配置，去除冗余

1. **精简版（适用于一般的游戏类官网、专题）推荐**
   ``` CSS
   body,dl,dd,ul,ol,h1,h2,h3,h4,h5,h6,p,form{margin:0}
   body,button,input,select,textarea{font:12px/1.5 HanHeiSC,PingFang SC,Helvetica Neue,Helvetica,STHeitiSC-Light,'\5b8b\4f53',Arial,sans-serif}
   h1,h2,h3,h4,h5,h6{font-size:100%}
   em,b{font-style:normal}
   a{text-decoration:none}
   a:hover{text-decoration:underline}
   img{border:0}
   button,input,select,textarea{font-size:100%;outline:none}
   table{border-collapse:collapse;border-spacing:0}
   td,th,ul,ol{padding:0}
   ```

2. **通用版（基本适用于所有的页面）**
   ```
   body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,
   blockquote,th,td{margin:0;padding:0}
   table{border-collapse:collapse;border-spacing:0}
   fieldset,img{border:0}
   address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}
   ol,ul{list-style:none}
   caption,th{text-align:left}
   h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}
   q:before,q:after{content:''}
   abbr,acronym{border:0;font-variant:normal}
   sup{vertical-align:text-top}
   sub{vertical-align:text-bottom}
   input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit}
   input,textarea,select{*font-size:100%}
   ```

3. **通用版（支持html5）**
   ```
   body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,
   details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}
   article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section { display:block; }
   table{border-collapse:collapse;border-spacing:0}
   audio,canvas,video { display: inline-block;*display: inline;*zoom: 1;}
   fieldset,img{border:0}
   address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}
   ol,ul{list-style:none}
   caption,th{text-align:left}
   h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}
   q:before,q:after{content:''}
   abbr,acronym{border:0;font-variant:normal}
   sup{vertical-align:text-top}
   sub{vertical-align:text-bottom}
   input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit}
   input,textarea,select{*font-size:100%}
   ```

#### IE6下半透明png24图片的处理
>说明：建议优先选择方案1，如方案1不行，选择方案2，方案3为最后的方案

1. **方案1**： png8说明：将背景切进图片中，导出为png8格式
2. **方案2**：AlphaImageLoader滤镜
   ```
   selectors {
   		background: url(image.png);
   		_background: none;
   		_filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='image.png', sizingMethod='crop');
   	}
   ```
   注：此方案适用于页面透明png24较少的情况下使用，并且不可以是聚合图
3. **方案3**： DD_belatedPNG使用示例：
   ```
    <!--[if IE 6]>
   	<script src="//game.gtimg.cn/images/js/comm/DD_belatedPNG-min.js"></script>
   	<script>
   		DD_belatedPNG.fix('.example1,.example2');
   	</script>
   	<![endif]-->
   ```


