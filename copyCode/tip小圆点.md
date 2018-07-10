# Tip小圆点

经常在轮播图上使用，鼠标移或点击上会有各种动画效果

### tip1

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
    <li class="dotstyle dotstyle-circlegrow">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-circlegrow">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-circlegrow">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-circlegrow">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-circlegrow">
        <span></span>
    </li>
</ul>
```

.dotstyle-circlegrow必须添加在li上

+ 通过添加删除`.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

### tip2

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<div class="wrapper">
    <ul class="container">
        <li class="dotstyle dotstyle-dotmove">
            <span></span>
        </li>
        <li class="dotstyle dotstyle-dotmove">
            <span></span>
        </li>
        <li class="dotstyle dotstyle-dotmove">
            <span></span>
        </li>
        <li class="dotstyle dotstyle-dotmove">
            <span></span>
        </li>
        <li class="dotstyle dotstyle-dotmove">
            <span></span>
        </li>
        <li class="dotstyle dotstyle-dotmove">
        </li>
    </ul>
</div>
```

+ 通过添加删除`.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

### tip3

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
    <li class="dotstyle dotstyle-dotstroke">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-dotstroke">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-dotstroke">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-dotstroke">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-dotstroke">
        <span></span>
    </li>
</ul>
```

+ 通过添加删除`.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

### tip4

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
        <li class="dotstyle dotstyle-drawcircle">
            <span></span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" preserveAspectRatio="none">
                <circle cx="8" cy="8" r="6.215"></circle>
            </svg>
        </li>
        <li class="dotstyle dotstyle-drawcircle">
            <span></span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" preserveAspectRatio="none">
                <circle cx="8" cy="8" r="6.215"></circle>
            </svg>
        </li>
        <li class="dotstyle dotstyle-drawcircle">
            <span></span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" preserveAspectRatio="none">
                <circle cx="8" cy="8" r="6.215"></circle>
            </svg>
        </li>
        <li class="dotstyle dotstyle-drawcircle">
            <span></span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" preserveAspectRatio="none">
                <circle cx="8" cy="8" r="6.215"></circle>
            </svg>
        </li>
        <li class="dotstyle dotstyle-drawcircle">
            <span></span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" preserveAspectRatio="none">
                <circle cx="8" cy="8" r="6.215"></circle>
            </svg>
        </li>
    </ul>
```

+ 通过添加删除`.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

### tip5

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
    <li class="dotstyle dotstyle-fall">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-fall">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-fall">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-fall">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-fall">
        <span></span>
    </li>
</ul>
```

+ 通过添加删除`.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

### tip6

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
    <li class="dotstyle dotstyle-fillin">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-fillin">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-fillin">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-fillin">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-fillin">
        <span></span>
    </li>
</ul>
```

+ 通过添加删除`.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

### tip7

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
    <li class="dotstyle dotstyle-fillup">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-fillup">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-fillup">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-fillup">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-fillup">
        <span></span>
    </li>
</ul>
```

+ 通过添加删除`.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

### tip8

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
    <li class="dotstyle dotstyle-flip">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-flip">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-flip">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-flip">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-flip">
        <span></span>
    </li>
</ul>
```

+ 通过添加删除 `.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

### tip9

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
    <li class="dotstyle dotstyle-flip">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-flip">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-flip">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-flip">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-flip">
        <span></span>
    </li>
</ul>
```

+ 通过添加删除 `.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

### tip10

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
    <li class="dotstyle dotstyle-hop">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-hop">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-hop">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-hop">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-hop">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-hop">
        <span></span>
    </li>
</ul>
```

+ 通过添加删除 `.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

### tip11

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
    <li class="dotstyle dotstyle-puff">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-puff">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-puff">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-puff">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-puff">
        <span></span>
    </li>
</ul>
```

+ 通过添加删除 `.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

### tip12

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
    <li class="dotstyle dotstyle-puff">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-puff">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-puff">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-puff">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-puff">
        <span></span>
    </li>
</ul>
```

+ 通过添加删除 `.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

### tip14

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
    <li class="dotstyle dotstyle-scaleup">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-scaleup">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-scaleup">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-scaleup">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-scaleup">
        <span></span>
    </li>
</ul>
```

+ 通过添加删除 `.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

### tip15

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
    <li class="dotstyle dotstyle-smalldotstroke">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-smalldotstroke">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-smalldotstroke">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-smalldotstroke">
        <span></span>
    </li>
    <li class="dotstyle dotstyle-smalldotstroke">
        <span></span>
    </li>
</ul>
```

+ 通过添加删除 `.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

###tip16

+ 页面引入文件

```
js/jquery-3.2.1.min.js
```

+ HTML内容

```
<ul class="container">
    <li class="dotstyle dotstyle-tooltip">
        <span>Home</span>
    </li>
    <li class="dotstyle dotstyle-tooltip">
        <span>Portfolio</span>
    </li>
    <li class="dotstyle dotstyle-tooltip">
        <span>Blog</span>
    </li>
    <li class="dotstyle dotstyle-tooltip">
        <span>About</span>
    </li>
    <li class="dotstyle dotstyle-tooltip">
        <span>Contact</span>
    </li>
</ul>
```

+ 通过添加删除 `.current`来控制样式

    ```
    $("li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
    })
    ```

<a href="relase/tip.rar">点击下载代码</a>

参考链接 http://d.lanrentuku.com/down/js/daohang-1214/