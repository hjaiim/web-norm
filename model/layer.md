# layer模板
---
> 该模板包含不同动画效果的弹出层，如匀速、变速的从右到左及从下到上。

<a href="release/layer.rar">点击下载demo</a>

## layer模板实例

### 1. 引入文件

```
    css/base.css
    css/layer.css
    js/classie.js
    js/layerEffect.js
```
### 2. HTML

```
<div class="layer-area">
	<button class="layer-trigger" 
              data-modal="layer_show1">
              FadeBottom&line
    </button>
</div>
<div class="layer-show">
    <div id="layer_show1" 
        class="g-layer is-fixed animate-move1">
    </div>
</div>
```

+ 在任何元素增加`layer-trigger` `data-modal="layer_show1"`属性都可以使它能点击打开layer弹出层。必填参数
- 在弹出层元素上增加`#layer_show1` `.g-layer .is-fixed .animate-move1`,来指定弹出层动画类型。必填参数

### 3. Javascript

- `layerEffect.js`主要是添加与移除动画




