
#####		忽略数字自动识别为电话号码

```
<meta content="telephone=no" name="format-detection" /> 
```
#####	忽略识别邮箱

```
<meta content="email=no" name="format-detection" />
```

#####	uc强制竖屏

```
<meta name="screen-orientation" content="portrait">
```

#####	QQ强制竖屏 

```
<meta name="x5-orientation" content="portrait">
```
#####	UC强制全屏
 
```
<meta name="full-screen" content="yes">
```
#####	QQ强制全屏 

```
<meta name="x5-fullscreen" content="true">
```

#####	UC应用模式 

```
<meta name="browsermode" content="application">
```
#####	QQ应用模式 
 
```
<meta name="x5-page-mode" content="app">
```

-------ios---------start-------------  
#####		WebApp全屏模式：伪装app，离线应用

```
<meta name="apple-mobile-web-app-capable" content="yes" /> 
```
#####		隐藏状态栏/设置状态栏颜色：只有在开启WebApp全屏模式时才生效。  
content的值为default | black | black-translucent 

```
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

#####		添加到主屏后的标题

```
<meta name="apple-mobile-web-app-title" content="标题">
```

#####	添加到主屏的icon

```
<link rel="apple-touch-icon-precomposed" href="/icon.png"/>
```
----------ios-----------end------------------  

#####		viewport：能优化移动浏览器的显示。如果不是响应式网站，不要使用initial-scale或者禁用缩放。		

```
<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
```

#####	支付宝分享

```
<meta name="Alipay:link" content="">  
<meta name="Alipay:title" content="标题">  
<meta name="Alipay:imgUrl" content="图片">  
<meta name="Alipay:desc" content="内容描述">
```

#### 移动端常用meta标签

```
	
	<!-- 为移动设备添加 viewport -->
    <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
    
    <!-- 忽略页面中的数字识别为电话号码,邮箱格式为邮箱 -->
    <meta name="format-detection" content="telphone=no, email=no"/>  
    
    <!--	设置作者姓名及联系方式 -->
    <meta name="author" contect="name, xxx@163.com" />
    
     <!-- 不让百度转码 -->
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    
```    