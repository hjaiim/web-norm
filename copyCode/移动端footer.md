# 移动端footer

 + 给footer元素设置宽高及定位，`footer>div`设置宽度和高度

 ```
 <footer>
    <div>
        <img src="../images/book_log.jpg" alt="">
        <span>1</span>
    </div>
    <div>
        <img src="../images/choiceLog.jpg" alt="">
        <span>2</span>
    </div>
    <div>
        <img src="../images/classtifyLog.jpg" alt="">
        <span>3</span>
    </div>
</footer>
 ```

 + js 设置`font-size`属性

 ```
<script>
    var oHtml = document.getElementsByTagName("html")[0];
    var screenW = document.documentElement.offsetWidth || document.body.offsetWidth;
    oHtml.style.fontSize = 100 * screenW / 750 + "px";
</script>
 ```

<a href="./relase/footer.html">点击查看代码</a>
