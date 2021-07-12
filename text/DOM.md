# DOM
## 什么是DOM
DOM ( Document Object Model ) 文档对象模型
## 文档
文档表示的就是整个的HTML网页
## 对象
表示将网页中的每一个部分都转换为了一个对象
## 模型
使用模型来表示对象之间的关系，方便获取对象
## 节点
网页中的每一个部分都可以称为一个节点，是网页的最基本的组成部分
### 文档节点
整个HTML文档
### 元素节点
HTML文档中的HTML标签
#### 获取元素节点 ( 通过 document 对象调用 )
### `getElementById()`      
通过`id`属性获取`一个`元素节点对象

### `getElementsByTagName()`    
通过标签名获取`一组`元素节点对象

### `getElementsByName()`    
通过`name`属性获取`一组`元素节点对象

### `getElementsByClassName()`  
通过`class`属性获取`一组`元素节点对象 ( 不支持`IE8`及以下的浏览器 )

### `document.body`     
保存的是`body`的引用

### `document.documentElement`  
保存的是`html`根标签

### `document.all`  
代表页面中的所有元素

### `document.querySelector()`  
可以接收一个选择器的字符串作为参数，可以根据选择器来查询一个元素节点对象，会返回唯一的一个元素，如果满足条件的元素有多个，只会返回第一个 ( `IE8`及以上都支持 )

### `document.querySelectorAll()`   
会将符合条件的元素封装到一个数组中返回，即使符合条件的元素只有一个，也会返回数组 ( `IE8`及以上都支持 )
```html
<div class="box">
    <div>我是box中的div</div>
</div>
<div id="app"></div>
<script>
    var div = document.querySelector('.box div');
    var app = document.querySelectorAll('#app');
    console.log(div.innerHTML);     // 输出 我是box中的div
    console.log(app);
</script>
```
### `document.createElement()`  
可以用于创建一个元素节点对象，需要一个标签名作为参数，会根据该标签名创建元素节点对象，并将创建好的对象作为返回值返回

### `document.createTextNode()`     
可以用来创建一个文本节点对象，需要一个文本内容作为参数，会根据该内容创建文本节点，并将新的节点返回

### `appendChild()`     
向一个父节点中添加一个新的子节点，语法:`父节点.appendChild(子节点)`

### `insertBefore()`    
可以在指定的子节点前插入新的子节点，语法:`父节点.insertBefore(新节点,旧节点)`

### `replaceChild()`    
可以使用指定的子节点替换已有的子节点，语法:`父节点.replaceChild(新节点,旧节点)`

### `removeChild()`     
可以删除一个子节点，语法:`父节点.removeChild(子节点)`

### `cloneNode()`       
复制节点，语法:`node.cloneNode()`  

`node.cloneNode(true)`,克隆节点本身和子节点， 返回克隆出来的新节点
                           
### 属性节点
元素的属性
#### 获取元素节点的子节点(通过具体的元素节点调用)
### `getElementsByTagName()`    
方法，返回当前节点的指定标签名后代节点

### `childNodes`    
属性，会获取当前节点的所有子节点，根据`DOM`标准，标签间空白也会当成文本节点 ( `IE8`及以下的浏览器中，不会将空白文本当成子节点 )

### `children`      
属性，可以获取当前元素的所有子元素

### `firstChild`    
属性，可以获取当前节点的第一个子节点 ( 包括空白文本 )

### `firstElementChild`     
属性，获取当前元素的第一个子元素 ( 不包括空白文本，`IE8`及以下不支持 )

### `lastChild`     
属性，可以获取当前节点的最后一个子节点

### `lastElementChild`      
属性，获取当前元素的最后一个子元素 ( 不包括空白文本，`IE8`及以下不支持 )


#### 获取父节点和兄弟节点(通过具体的节点调用)
### `parentNode`    
属性，可以获取当前节点的父节点

### `parentElement`     
属性，可以获取当前元素的父元素

### `previousSibling`   
属性，可以获取当前节点的前一个兄弟节点 ( 也可能获取到空白文本 )

### `previousElementSibling` 
属性，可以获取当前元素的前一个兄弟元素 ( `IE8`及以下不支持 )

### `nextSibling`   
属性，可以获取当前节点的后一个兄弟节点

### `nextElementSibling`    
属性，可以获取当前元素的后一个兄弟元素 ( `IE8`及以下不支持 ) 

### 文本节点
HTML标签当中的文本内容

### `innerHTML`     
通过这个属性可以获取元素内部的`html`代码 

### `innerText`     
通过这个属性可以获取元素内部的文本内容，会自动将`html`标签去除

### 操作CSS
    通过JS读取元素的样式，语法：元素.style.样式名 
         
        通过style属性设置和读取的都是内联样式，无法读取到样式表中的样式 
         
    通过JS修改元素的样式，语法：元素.style.样式名 = 样式值
         
        如果CSS的样式中含有 - ，在JS中是不合法的，比如background-color

        需要将这种样式名修改为驼峰命名法 backgroundColor
         
        通过style属性设置的样式是内联样式，而内联样式有较高的优先级，所以通过JS修改的样式会立即显示
          
        但如果在样式中写了 !important ，那么此时的样式会有最高的优先级，即使通过JS也不能覆盖该样式，JS修改的样式将会失效
         
```html
    <div id="box" style="width: 100px; height: 100px; background-color: red;"></div>
    <button id="btn01">点击读取</button>
    <button id="btn02">点击修改</button>
    <button id="btn03">读取</button>
    <script>
        var box = document.getElementById('box'),
        btn01 = document.getElementById('btn01'),
        btn02 = document.getElementById('btn02'),
        btn03 = document.getElementById('btn03');
        
        btn01.addEventListener('click',function(){
            console.log(box.style.width);
            console.log(box.style.height);
            console.log(box.style.backgroundColor);
        })
        btn02.addEventListener('click',function(){ 
            box.style.width = '100px';
            box.style.height = '100px';
            box.style.backgroundColor = 'green';
        })
        btn03.addEventListener('click',function(){
            console.log(box.currentStyle.width);
            console.log(getComputedStyle(box,null).height);
        })
        // obj 要获取样式的元素
        // name 要获取的样式名
        function getStyle(obj,name){
            if(window.getComputedStyle){
                return getComputedStyle(obj,null)[name]
            }else{
                return obj.currentStyle[name]
            }
        }
    </script>
```
### `currentStyle`  
读取元素当前的样式，语法：`元素.currentStyle.样式名`，如果当前元素没有设置该样式，则获取它的默认值`auto`，读取到的样式不能修改  ( 只有`IE`浏览器支持 )


### `getComputedStyle()`    
方法，获取元素当前的样式，语法:`getComputedStyle(元素,null)`，会返回一个对象，对象中封装了当前元素对应的样式，可以通过对象.样式名来读取样式 ( `IE8`及以下不支持 )


### `clienWidth`    
属性，可以获取元素的可见宽度，包括内容区和内边距，返回的是一个数字，可以直接计算，是只读的，不能修改


### `clienHeight`  
 属性，可以获取元素的可见高度，包括内容区和内边距，返回的是一个数字，可以直接计算，是只读的，不能修改


### `offsetWidth`   
属性，获取元素的整个的宽度，包括内容区，内边距和边框


### `offsetHeight`  
属性，获取元素的整个的高度，包括内容区，内边距和边框


### `offsetParent`  
可以用来获取当前元素的定位父元素，会获取到离当前元素最近的，开启了定位的祖先元素，如果所有的祖先元素都没有开启定位，则返回`body`


### `offsetLeft`    
当前元素相对于其定位父元素的水平偏移量  


### `offsetTop`   
当前元素相对于其定位父元素的垂直偏移量


### `scrollWidth`    
获取元素整个滚动区域的宽度


### `scrollHeight`   
获取元素整个滚动区域的高度
                       

### `scrollLeft`   
可以获取水平滚动条滚动的距离


### `scrollTop`    
可以获取垂直滚动条滚动的距离   


