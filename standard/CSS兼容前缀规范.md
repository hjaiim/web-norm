
## **浏览器兼容前缀规范**

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