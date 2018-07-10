### **CSS缩写示例**
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