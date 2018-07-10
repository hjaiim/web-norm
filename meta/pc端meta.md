

#####	Keywords(关键字)用来告诉搜索引擎你网页的关键字是什么。　

```
<meta name="keywords"content="meta总结,html meta,meta属性,meta跳转"> 
```
#####	description(网站内容描述)description用来告诉搜索引擎你的网站主要内容。

```
<meta name="description"content="haorooms博客,html的meta总结，meta是html语言head区的一个辅助性标签。"> 
```

##### 文件将被检索，且页面上的链接可以被查询；
```
<meta name="robots"content="all"> 
```

##### 信息参数为none：文件将不被检索，且页面上的链接不可以被查询；
```
<meta name="robots"content="none"> 
```

##### 文件将被检索；
```
<meta name="robots"content="index"> 
```

##### 页面上的链接可以被查询；
```
<meta name="robots"content="follow"> 
```

##### 文件将不被检索，但页面上的链接可以被查询；
```
<meta name="robots"content="noindex"> 
```

##### 文件将被检索，但页面上的链接不可以被查询；
```
<meta name="robots"content="nofollow"> 
```

#####	author(作者)标注网页的作者

```
<meta name="author"content="root,root@xxxx.com"> 
```
#####	generator代表说明网站的采用的什么软件制作

```
<meta name="generator"content="信息参数"/> 
```

#####	copyright代表说明网站版权信息

```
<meta name="copyright"content="信息参数"> 
```

#####	revisit-after,设置一个爬虫的重访时间。如果重访时间过短，爬虫将按它们定义的默认时间来访问。 

```
<meta name="revisit-after"CONTENT="7days"> 
```


#####	Expires(期限)可以用于设定网页的到期时间。一旦网页过期，必须到服务器上重新传输。


```
<meta http-equiv="expires"content="Fri,12Jan200118:18:18GMT"> 
```

#####	Pragma(cache模式)禁止浏览器从本地计算机的缓存中访问页面内容。


```
<meta http-equiv="Pragma"content="no-cache"> 
```

##### 	Refresh(刷新)自动刷新并指向新页面。


```
<meta http-equiv="Refresh"content="2;URL=http://www.haorooms.com"> //(注意后面的引号，分别在秒数的前面和网址的后面) 
```

#####	Set-Cookie(cookie设定)如果网页过期，那么存盘的cookie将被删除。

```
<meta http-equiv="Set-Cookie"content="cookie value=xxx;expires=Friday,12-Jan-200118:18:18GMT；path=/"> 
```

#####	Window-target(显示窗口的设定)强制页面在当前窗口以独立页面显示。

```
<meta http-equiv="Window-target"content="_top"> 
```

####	content-Type(显示字符集的设定)设定页面使用的字符集。

#####	网站是采用的编码是简体中文；
```
<meta http-equiv="content-Type"content="text/html;charset=gb2312"> 
```

#####	网站是采用的编码是繁体中文；
```
<meta http-equiv="content-Type"content="text/html;charset=BIG5"> 
```

#####	网站是采用的编码是日文；
```
<meta http-equiv="content-Type"content="text/html;charset=iso-2022-jp"> 
```

#####	网站是采用的编码是韩文；
```
<meta http-equiv="content-Type"content="text/html;charset=ks_c_5601"> 
```

#####	网站是采用的编码是英文；
```
<meta http-equiv="content-Type"content="text/html;charset=ISO-8859-1"> 
```

#####	世界通用的语言编码；

```
<meta charset="utf-8"> //HTML5设定网页字符集的方式，推荐使用UTF-8
```

#####	content-Language（显示语言的设定）

```
<meta http-equiv="Content-Language"content="zh-cn"/> 
``` 
 
#####	先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。  
```
<meta http-equiv="Cache-Control" content="no-cache" />
```

#####	不允许缓存，每次都要去服务器上，下载完整的响应。（安全措施）  
```
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

#####	缓存所有响应，但并非必须。因为max-age也可以做到相同效果  
```
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

#####	只为单个用户缓存，因此不允许任何中继进行缓存。（比如说CDN就不允许缓存private的响应）  
```
<meta http-equiv="Cache-Control" content="no-siteapp" />
```
#####	表示当前请求开始，该响应在多久内能被缓存和重用，而不去服务器重新请求。例如：max-age=60表示响应可以再缓存和重用 60 秒。  

```
<meta http-equiv="Cache-Control" content="no-siteapp" />
```
#####	转码申明：用百度打开网页可能会对其进行转码（比如贴广告），避免转码可添加如下meta

```
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

#####	优先使用 IE 最新版本和 Chrome

```
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
```
#####	 使用IE6

```	
<meta http-equiv="X-UA-Compatible" content="IE=6" >
```

#####	 使用IE7
```
<meta http-equiv="X-UA-Compatible" content="IE=7" >
```

##### 	使用IE8
```
<meta http-equiv="X-UA-Compatible" content="IE=8" >
```

#####	控制浏览器选择内核渲染

```
<meta name="renderer" content="webkit|ie-comp|ie-stand">
webkit //默认webkit内核 
ie-comp//默认IE兼容模式 
ie-stand //默认IE标准模式
```

#####	pc端常用meta标签


```
	< !-- 设置360浏览器渲染模式,webkit 为极速内核，ie-comp 为 IE 兼容内核，ie-stand 为 IE 标准内核 -- >
    <meta name="renderer" content="webkit">
    
    <!-- 禁止Chrome 浏览器中自动提示翻译 -->
    <meta name="google" value="notranslate">
    
    <! --	禁止百度转码-->
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    
	<! --向搜索引擎说明你的网页的关键词 -->
    <meta name="keywords" content=""> 
    
    <! --告诉搜索引擎你的站点的主要内容-->
	<meta name="description" content="">   
	
	<! --告诉搜索引擎你的站点的制作的作者 -->
	<meta name="author" content="你的姓名"> 
```