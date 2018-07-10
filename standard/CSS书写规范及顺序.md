
## **1.css样式书写规范**
所有的 选择器、属性和值都使用小写,不要使用大写以及驼峰.
### **2.css样式书写的顺序**

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
