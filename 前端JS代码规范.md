# 前端JS代码规范

## 一、文档背景
>为了使团队中的每一位成员都形成统一的开发约定，特制定本规范文档，在今后的开发过程中，请严格按照此文档约定的规则进行编码。通过此规范，希望可以给各开发人员之间起到沟通的桥梁作用，带来项目的可读性和可维护性。
如在使用过程中，碰到本文档中没进行约定的规则，待商议后对该文档进行补充和完善，这也将是一个持续的过程。

## 二、命名规范

1. 所有命名都必须使用能直接体现具体含义的名字，不使用X，Y，Z，等无意义的名称进行定义，除循环变量除外。

2. 命名以不超过4个单词为优。 如正确形式：titleBtn。错误形式：mainPageTileButton

3. 变量命名原则

   * 骆驼命名法，首字母小写，之后每个单词首字母大写（即首字母小写的驼峰）
   * 公开变量，不带下划线，如 userName、currState、loginTime
   * 私有变量，前缀下划线，如 _callBackList、_nameHash、_currType
   * 常量，全大写，每个单词之间使用下划线分割，如：TOUCH_COMPLETE、SEND_OVER、RENDER_TYPE_1
   * 词性格式，普通的变量以名词为主，布尔类型的变量以形容词/形容词+名词/形容词+动词为主，如：_isOk   _canBuild  _roleLevel _nameImg
   * 其他规则，容易产生误解的变量，考虑加上类型后缀，如：nameTxt、nameStr、avatarId（注意表示id的变量，以Id尾缀会更加清晰）

4. 类定义名命名原则

   * 骆驼命名法，首字母大写，之后每个单词首字母大写
   * 词性格式：以名词为主

5. 方法名命名原则

   * 骆驼命名法，首字母小写的驼峰
   * 词性格式：以动词+名词为主，如doAction()，updateData()、setView()
            c.getter/setter，以名词、形容词+名词为主
6. 其他约定

   * 不使用拼音
   * 不使用复杂的单词（尽量使用近义的小学生初中生单词，以不超过高中生单词为优，写代码不是为了秀英语，整一堆复杂的词没有任何意义！）
   * 不使用很长的单词，能缩写的尽量使用缩写形式。较好的形式：showSysMsg()。不是很好的形式：showSystemMessage()

## 三、代码格式规范

1. 注释的书写
>注意：公共方法需要注明注释（通用方法可省略注释）需要写明参数的描述、返回值的描述。必要时需注明参数结构或返回值结构，或贴上数据结构的样板

**正确写法:**
```
 /**调接口
	 * @param cmd 接口名
	 * @param param 传递的参数
	 * @param callback 成功的回调
	 * @param errorback 失败的回调
	 */
	function call(cmd, param, callback, errorback)
	{
	...
	}
```
**错误写法:**
```
//调接口
	function call(cmd, param, callback, errorback)
	{
	...
	}

```
2. 显式声明
>所有的成员变量必须在所有成员方法前面声明，用一个换行把它和方法分开，变量类型要显式声明。

**正确写法:**
```var sys;
(function (sys)
{
   var Message=(function()
   {
        var _msgStr="";
        var _showType=1;
        var _proto=SystemMsg.prototype;
        function SystemMsg()
        {
          this.skinName="";
        }
        _proto.show=function()
        {
            clear();
            .....
        }
        function clear()
        {
             _msgStr="";
             _showType=1;
        }
        return SystemMsg;
   }())
})(sys || (sys={}))
```
**错误写法：**
```
var sys;
(function (sys)
{
   var Message=(function()
   {
        var _proto=SystemMsg.prototype;
        function SystemMsg()
        {
          this.skinName="";
        }
        _proto.show=function()
        {
            clear();
            .....
        }
        var _msgStr="";
        var _showType=1;
        function clear()
        {
             _msgStr="";
             _showType=1;
        }
        return SystemMsg;
   }())
})(sys || (sys={}))
```
3. 花括号语句
>判断语句if、for、while、do等语句自占一行，执行语句不得紧跟其后，不论执行语句有多少都必须加{}。这样可以防止修改代码时失误。

**正确写法：**
```
function doLogin()
{
}
if(表达式)
{
   if(表达式)
   {
      逻辑...
   }
   else
   {
      逻辑...
   }
}
```
**错误写法：**
```
function doLogin {
}
if(表达式)
   if(表达式)
      逻辑...
if(表达式){
    if(表达式){
        逻辑...
}}
if(表达式){逻辑...}
```
4. switch语句一定要有default来处理意外情况。
5. 不同函数或方法之间，需要用空行来分开。
```
function LoginModule
{
    function doLogin()
    {
    }
    function onComplete_login(ev)
    {
    }
}
```
6. 一个方法只完成一个任务。不要把多个任务组合到一个方法中。
7. 避免使用大文件。如一个文件里的代码超过500行，必须考虑将代码按功能进行重构。
8. 尽量不用try...catch，特别是在for循环中。
9. 类型声明(列表包含基本经常使用的类型)

   在定义变量时，后缀类型，如果是组件，后缀组件类型，其他遵循驼峰法则。<br>
   示例：secondTxt   nameStr   contentObj     xmlLdr   memberListArr

10. 实例名
   实例名尽量不要起和类名无关的名字，尽量以类名保持一致，以提高识别度<br>
   例如：var skillData=new SkillData();

11. 注释规范

* 注释必须使用中文及中文的标点符号。
* 每行注释的最大长度不能超过1024*800的宽度，且需要与代码对齐。
* 将注释与注释分隔符用一个空格分开。
* 编码的同时书写注释。
* 重要变量必须有注释。
* 变量注释和变量在同一行，所有注释必须对齐。
* 典型算法必须有注释。
* 在循环和逻辑分支的地方必须写上注释。
* 程序段或语句的注释在程序段或语句的上一行。
* 在项目编译前，必须删掉临时的或无关的注释。
* 项目引擎中最好有统一的log管理模块，避免直接使用console对象
* object对象注释详解（不强制要求）
   1. a.hash类型的对象： {[key:T]:U}
      如：var _hash;  //{[skillId:number]:SkillData}
      表示hash表的key为skillId，值的类型为SkillData。
   2. b.Array类型的对象： T[]；二维数组：T[][]（注意，通常情况下，如果写明了类型，不加注释也可以）
      如：var _list; //number[][];
   3. c.function类型对象：(param:U)=>T
      如： var getIdList; //()=>number[]
      表示getIdList是一个方法，返回一个number[]

## 四、注意事项

1. 最重要的代码习惯：

   * 能够使用简单逻辑的，不要使用复杂逻辑
   * 尽量在项目中不使用未被广泛使用的框架或新技术，以保证稳定性及技术的统一性。
   * 对于可能影响性能，或者可能存在隐患的编码习惯要保持警惕性。如：尽量不使用try...catch，setInterval,setTimeout等，在新建模块或者新建类的时候，第一时间就要写dispose

2. 模块内与模块间，系统内及系统间的交互方式

   * 模块内的逻辑交互，可以使用事件，调公共方法，命名模式，回调等，这些都没有问题
   * 模块间的交互，尽量使用调公共方法的方式，以便代码回溯。
   * 系统内的交互，采用事件及公共方法的方式，系统功能的调用由系统提供公共方法，系统机制在运行中，发出重要的时间，模块可以监听需要的事件以触发业务逻辑。
   * 系统间的交互，需要考虑完全的松耦合，以事件为主

3. 业务逻辑分层

   * 在对业务逻辑进行划分时，应避免将线性逻辑，强行分割为两个类，并在主类中实例化另一个类，这会降低代码的可读性，并且运行时生成了不必要的对象（每一个对象的生成都是需要占用系统内存的）。
   * 正确的做法是，线性逻辑在同一个类中完成，逻辑涉及的功能分割为功能类，由主类进行控制。程序员需要关心线性逻辑时，可以不必查看功能模块的代码，关心功能模块时，可以不必仔细阅读线性逻辑的代码。

4. 对象数量的控制

   * 应避免实例化太多的对象用于处理简单逻辑
   * 应避免实例化很多对象，而对象内部的逻辑其实是单例对象处理的
   * 应避免实例化很多对象，用于生成数据对象
   * 因为这些对象可能会由于无人清理而一直占用着内存

## 五、重点补充

1. dom里面叫什么名字，方法里面就叫什么名字
   ```
   <button name="okBtn" @click="onClick_okBtn"/>
   ```

2. 定义叫什么名字，实例就叫什么名字
   ```
   var shopItem=new ShopItem();
   ```

3. 生成对象的方法叫什么名字，声明赋值的变量就叫什么名字
   ```
   var groupList= xxx.getGroupList();
   ```
4. 事件监听器的命令规则：

   ```
   on事件类型_target(e)
   {
      ....
   }
   ```
   比如：
    ```
    function onClick_closeBtn(e)
    function onClick_linkBtn(e)
    function onClick_item(e)
    function onClick_showMoreBtn(e)
    ```
    千万不要取这样的名字,不利于追溯代码

    ```
    onClick_popPanel(e)

    onClick_checkAccount(e)

    onClick_doLogin(e)

    onClick_showLoading(e)
    ```
5. 命名总结

    * 只有定义，是首字母大写的驼峰，   MainNav
    * 其余首字母都是小写的驼峰  listItem
    * 私有变量，变量前缀_           _currPage
    * 入参，参数前缀$（公共方法一定要加，私有方法如果没加能看懂也可以，但是尽量养成习惯）     function  showPanel($panelName,  $showType , $tweenType)
    * 方法名。必须是：动词加名词（事件监听器前缀on）
