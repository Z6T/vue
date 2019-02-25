
# vue基础知识部分
### 扯淡前言
* 这个笔记是关于vue的所有重点基础知识,大部分配的有实例

### 构造器

* 实例化vue时，需传入一个选项对象，它可以包括 数据、模板、挂载元素、方法和生命周期钩子
### 属性与方法
* 每个vue实例都会代理其data对象里所有的属性
* vue实例暴露了一些有用的实例属性与方法，这些属性与方法都有前缀$，以便与代理的data属性区分
### 实例生命周期
* created钩子------在实例被创建后被调用
* mounted----当编译好的HTML被挂载到对应的位置,这个操作完成后触发
* updated----当data中的数据改变,并且虚拟DOM重新渲染完成后触发
* destroyed
* 概要: 钩子的this 指向调用它的实例
### 生命周期图示
* https://cn.vuejs.org/images/lifecycle.png
### 插值
* 文本
    * 双大括号
    * v-text
* 纯HTML
    * v-html
* 属性
    * v-bind（大双括号不能在属性中使用，因此需使用v-bind）
* 使用JavaScript表达式
### 指令
* 哪些指令?
    * v-bind
    * v-on
    * v-if
    * v-for（特殊）
     ```
                           v-if  
     <div id="app">
      <template v-if="ok==='username'">
      用户名: <input type="text" placeholder="请输入用户名" key="name-input">
      </template>
      <template v-else>
     密码: <input type="text"  placeholder="请输入密码" key="psd-input">
      </template>
      <button @click="toggle">点击切换类型</button>
    </div>
    
    new Vue({
        el: "#app",
        data: {
          ok:'username'
        },
        methods: {
        toggle: function(todo){
            if(this.ok==='username'){
            this.ok = 'psd'
          }else{
            this.ok = 'username';
          }
        }
        }
    })
     ```
     ```
     					v-for
     <div id="app">
      <ul>
        <li v-for="item in items">{{item}}</li>
      </ul>
    </div>
    
    new Vue({
      el: "#app",
      data: {
      items:['a','b','c']
      },
      methods: {
        toggle: function(todo){
            todo.done = !todo.done
        }
      }
    })
    
     ```
* 修饰符
    * v-on
        * .stop   阻止单击事件冒泡 	 <a v-on:click.stop="doThis"></a>
        * .prevent  提交事件不再重载页面 
        * .capture  添加事件侦听器时使用时间捕获模式
        * .self  只当事件在该元素本身（而不是子元素）触发时触发回调
        * 太多了,不再总结.这些都不重要,大家有空自己搜一下吧~~~~哈哈
### 过滤器
* 过滤器的目的是用于文本转换,转化成你想要的格式,还是给大家来个例子

   ```
   						filters
   <div id="app">
        <p>{{message | changeChar}}</p>
       <button @click="changeFirstChar">改变</button>
    </div>
   
   new Vue({
    el: "#app",
    data: {
      message:'nihao'
    },
    methods: {
        changeFirstChar: function(todo){
            this.message = 'good evening'
        }
      },
      filters:{
        changeChar(value){
                if(!value){
            return '';
          }else{
            return value.charAt(0).toUpperCase()+value.substring(1)
          }
        }
      }
    })
   ```

    
### 缩写
* v-bind缩写
    * 原有： <a v-bind:href="url"></a>     缩写： <a :href="url"></a>
* v-on缩写
    * 原有：<button v-on:click="doSomeThing"></button> 缩写：<button @click="doSomeThing"></button>
## 计算属性
### 计算属性（减少模板{{}}的复杂度）
* 基础例子1
* 计算属性的两种写法
```
						computed
<div id="app">
   {{fullName}}
</div>

new Vue({
  el: "#app",
  data: {
  		firstName:'Ji',
   	 	lastName:'RenGu'
  },
 	computed:{
  	fullName(){
    	return this.firstName+'----'+this.lastName;
    }
  }
})
```
* 计算缓存vs方法(Methods)
    * 计算属性computed具有缓存，而methods无缓存
* Computed属性vs 侦听器(Watch属性)
    * watch方法--观察Vue实例上的数据变动,只要指定的数据改变就会执行预定的函数
    ```
    							watch
    <div id="app">
        {{msg}} <br> 
        改变了吗? {{isChange}}
        <button @click="change">改变</button>
    </div>
    
    new Vue({
      el: "#app",
      data: {
            msg:'欲穷千里目',
          isChange:'No'
      },
        watch:{
        //只要msg改变,这个方法就会执行
        msg(val,oldVal){
            this.isChange = 'Yes'
        }
      },
      methods:{//不得不说ES6写起来真爽
        change(){
            this.msg = '更上一层楼'
        }
      }
    })
    ```
    * computed方法
* 计算setter 和getter
    * get和set,顾名思义,一个是获得,一个是设置,常规上来讲,计算属性中都是有get和set方法的,默认是只有getter方法,如果需要的话,自然,你也可以写一个setter方法.来个例子,诸位往下看:
   ```
						get和set
<div id="app">
 此时的onpiece: {{onepiece}} <br>
 此时的msg:  {{msg}} <br><br>
  <button @click="setName">设置name</button>
</div>		

new Vue({
  el: "#app",
  data: {
  	name:'Kobe',
    msg:''
  },
  methods:{
  	setName(){
    	this.onepiece = 'JorDan'
    }
  },
  computed:{
  	onepiece:{
        get(){
          return this.name +'Bryant';
        },
        set(newVal){
          //当你给onepiece设置值的时候set就就会调用
          this.msg = newVal+'is the greatest basketball player';
        }
    }
  }
})

   ```



## class与style绑定
### 绑定HTML class
* 对象语法
    * 基本
    * 在对象中传入多个class属性（其会与原有class共存）
    * 直接传入对象
    * 与计算属性一起使用（绑定返回对象的计算属性）
* 数组语法
    * 简单例子
    * 三元表达式
    * 当有多个条件class时，可以在数组语法中使用对象语法
* 用在组件上
    * 简单例子

    * 绑定HTML class例子

     ```
     		绑定class的几种方式
    .classC{
      color:red;
    }
    .classD{
      font-weight:bold;
    }
    .classE{
      font-size:20px;
    }
    .classF{
      color:blue;
    }
    .classM{
      display:block;
    }
    .classN{
      display:none;
    }
     
     ```
     ```
    <div id="app">
      <h2>class属性绑定</h2>
     -------------------绑定变量-------------------------
     <div :class="{classA:a,classB:b}">
       绑定变量
     </div>
      -------------------绑定对象-------------------------
     <div :class="styleObj">
       绑定对象
     </div>
      -------------------绑定数组-------------------------
     <div :class="arrClass">
       绑定数组
     </div>
       -------------------绑定三元运算符-------------------------
     <div :class="m==true?'classM':'classN'">
       绑定变量
     </div>
       <button @click="toggle">toggle</button>
    </div>
     ```
```

    new Vue({
      el: "#app",
      data: {
       a:true,
       b:false,
       styleObj:{
        classC:true,
        classD:true
       },
       m:true,
       arrClass:['classE','classF']
      },
      methods:{
        toggle(){
            this.m=!this.m;
        }
      }
    })

```
### 绑定内联样式
* 对象语法
    * 内联式对象语法
    * 样式对象式对象语法（更推荐）
* 数组语法
* 自动添加前缀
    * v-bind:style 当需要特定的前缀时如transform，vue.js会自动添加
* 多重值
    * 从vue2.3+后，可以为一个属性添加多个值的数组，常用于含有多个前缀的情况
例子跟上边差不了多少,懒得写了.相信大家应该也都会,哈哈哈哈~~~

## 条件渲染
### v-if（v-else）是真正的渲染
* template元素与v-if
* v-else（需要紧跟在v-if后边）
* v-else-if（vue2.1.0新增）
* 用key管理可复用的元素---(如果这个例子看不懂的话.可以在群里问我!!!)
    * 例子：用户名和邮箱登录界面 如果有key就不会复用,大家可以把key去试一下,然后输入看一下效果!!!
    ```
    	<div id="app">
          <template v-if="ok==='username'">
              用户名: <input type="text" placeholder="请输入用户名" key="name-input">
          </template>
          <template v-else>
             密码: <input type="text"  placeholder="请输入密码" key="psd-input">
          </template>
          <button @click="toggle">点击切换类型</button>
        </div>
        
        new Vue({
          el: "#app",
          data: {
           ok:'username'
          },
          methods: {
            toggle: function(todo){
                if(this.ok==='username'){
                this.ok = 'psd'
              }else{
                this.ok = 'username';
              }
            }
          }
        })
    ```
### v-show（其只是简单的切换display属性）
* v-show不支持template语法
* v-show不支持v-else
### v-if VS v-show
* v-if
    * 当条件不成立时不会渲染
    * 切换开销较大，适合不太可能变化的场景
* v-show
    * 无论成不成立都会渲染
    * 首次渲染开销较大，但切换开销小，因此适合经常变化的场景
## 列表渲染
### v-for
* 基本用法
    * 简单例子
    * 带有index参数
    * 使用of 替代 in
* template v-for
    * 简单例子
* 对象迭代 v-for
    * 基础用法
    * 带其他参数用法
* 整数迭代 v-for
    * 例子
* 组件和v-for
 包含所有类型的例子
 ```
 <div id="app">
      <hr>
      <strong style="border:2px solid #ccc;">遍历数组:</strong>
      <ul>
        <li v-for="item in items" >{{item}}</li>
      </ul>
       <hr>
      <strong style="border:2px solid #ccc;">遍历对象数组:</strong>
      <ul>
        <li v-for="(item,index) in pers">{{index}}--我是{{item.name}},今年{{item.age}}岁</li>
      </ul>
         <hr>
      <strong style="border:2px solid #ccc;">遍历对象:</strong>
      <ul>
        <li v-for="(value,key) in obj">
          key:{{key}} |
          value:{{value}}
        </li>
      </ul>
  </div>
  
  new Vue({
      el: "#app",
      data: {
        isOK:'true',
            items:['香蕉','苹果','烤肉'],
        pers:[{
            name:'Kobe',
          age:'40'
        },
        {
            name:'James',
          age:'38'	
        }],
        obj:{
            1:'one',
          2:'two'
        }
      }
    })
 ```

### key
* 作用
    * 用v-for更新已渲染过的列表时，它默认采用的是“就地复用”的原则，也就是如果数据项顺序发生了改变，vue将不是移动DOM元素来匹配数据项的顺序，而是简单复用此处的元素。如果想跟踪每个节点的身份，从而重用或重新排列现有元素，可使用key。（key还可用在v-if中，详见v-if中的邮箱名和用户名切换的例子）

* 好吧,可能大家看到这里是一头雾水,不知所以,忧心忡忡,到底key有什么卵用,刚才上边的例子不是没有加key吗?好吧,不扯那没用的,通过一个例子告诉大家key到底有啥用!!!

    ```
    <div id="app">
      KEY: <input type="text" v-model="id"> VALUE: <input type="text" v-model="name">
      <button @click="add">添加</button>
      <ul>
    <li v-for="item in list" :key="item.id"> //此处你可以吧key去了,先勾选一条,在追加一条试一下,然后加上key,勾选一条追加一条再试一下,一目了然
      <input type="checkbox" >
      {{item.id}}---{{item.name}}
    </li>
      </ul>
    </div>
    ```
```
new Vue({
  el: "#app",
  data: {
    id:"",
    name:"",
    list:[
      {id:1, name:'李斯'},
      {id:2, name:'嬴政'},
      {id:3, name:'赵高'},
      {id:4, name:'韩非'},
      {id:5, name:'荀子'},
    ]
  },
  methods: {
  	add: function(){
    	this.list.unshift({id:this.id,name:this.name})
    }
  }
})
```

因为加上key默认采取的就是就地复用策略,这个例子,如果不懂,可以在群里问我
    ```
### 数组更新检测
* 变异方法（会改变原有数组）
    * push（）
    * pop（）
    * shift（）
    * unshift（）
    * splice（）
    * sort（）
    * reverse（）
* 重塑数组
    * filter（）
    * concat（）
    * slice（）
* 注意事项
	 利用索引直接设置一个项时，vue不能检测变动，如：		vm.items[indexOfItem] = newValue
	 那如果设置某一项的该怎么设置呢?
	
        * Vue.set(example1.items, indexOfItem, newValue)
        * example1.items.splice(indexOfItem, 1, newValue)
```
<div id="app">
  <button @click="setZF">设置第二项为张飞</button>
  <button @click="setGY">设置第三项为关羽</button>
  <ul>
    <li v-for="item in list">
      <input type="checkbox" >
      {{item.id}}---{{item.name}}
    </li>
  </ul>
</div>

var vmm = new Vue({
  el: "#app",
  data: {
    id:"",
    name:"",
    list:[
      {id:1, name:'李斯'},
      {id:2, name:'嬴政'},
      {id:3, name:'赵高'},
      {id:4, name:'韩非'},
      {id:5, name:'荀子'},
    ]
  },
  methods: {
  	setZF: function(){
    	Vue.set(this.list,1,{id:2,name:'张飞'})
    },
    setGY:function(){
    	this.list.splice(2,1,{id:3,name:'关羽'})
    }
  }
})
```
    * 修改数组长度时，vue不能检测变动，如：vm.items.length = newLength
    * 只能用example1.items.splice(newLength)
### 对与显示过滤/排序结果的两种方法
* 过滤数组--计算属性computed例子

* 过滤数组--方法methods例子

  ```
  				计算属性应用于过滤
  <div id="app">
    {{specialNum}}
  </div>
  
  new Vue({
    el: "#app",
    data: {
     nums:[1,2,3,4,5,6,7,8,9]
    },
   computed:{
   		specialNum(){
      	return this.nums.filter((item,index)=>{
        	return item%3==0;
        })
      }
   }
  })
  ```

  ```
  <div id="app">
    <ul>
    在v-for循环中直接嵌入方法
      <li v-for="item in fil(numbers)">{{item}}</li>
    </ul>
  </div>
  
  new Vue({
    el: "#app",
    data: {
     numbers:[1,2,3,4,5,6,7,8,9]
    },
    methods:{
    	  fil(nums){
      	return nums.filter((item,index)=>{
        		return item%3==0;
          }) 
      }
  	}
  })
  ```

  
## 两个简单的事件处理器
```
		先来一个简单小李子,v-on用来绑定事件
1
<div id="app">
 <button @click="num+=1">增加1</button>
 {{num}}
</div>

--------------------------------------------------

2 
<div id="app">
  <button @click="sayHello">点击sayHello</button>
</div>
new Vue({
  el: "#app",
  methods: {
  	sayHello: function(){
    	alert('sayHello')
    }
  }
})
```

### 内联处理器方法
* 访问原生DOM事件的例子,如果click事件不传参数,就默认把原生DOM传递进去

  ```
  <div id="app"> //没有传参数,就是原生的!!!
   <button @click="showBtnname">显示按钮的名字</button> <br><br>
     {{msg}}
  </div>
  
  new Vue({
    el: "#app",
    data: {
    	msg:''
    },
    methods: {
    	showBtnname: function(e){
      	this.msg = e.target.innerText;
      }
    }
  })
  ```

  

* 未访问原生DOM事件的例子,如果传了参数.那么方法中接受的第一个参数就是该参数,在vue中所有的事件绑定都是这样的

  ```
  ----------------------------html---------------------------------
  <div id="app">
    <h2>Todos:</h2>
    <ol>
      <li v-for="todo in todos">
        <label>
          <input type="checkbox"
            v-on:change="toggle(todo)"
            v-bind:checked="todo.done">
  
          <del v-if="todo.done">
            {{ todo.text }}
          </del>
          <span v-else>
            {{ todo.text }}
          </span>
        </label>
      </li>
    </ol>
  </div>
  ----------------------------js---------------------------------
  new Vue({
    el: "#app",
    data: {
      todos: [
        { text: "Learn JavaScript", done: false },
        { text: "Learn Vue", done: false },
        { text: "Play around in JSFiddle", done: true },
        { text: "Build something awesome", done: true }
      ]
    },
    methods: {
    	toggle: function(todo){
      	todo.done = !todo.done
      }
    }
  })
  ----------------------------css---------------------------------
  body {
    background: #20262E;
    padding: 20px;
    font-family: Helvetica;
  }
  
  #app {
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    transition: all 0.2s;
  }
  
  li {
    margin: 8px 0;
  }
  
  h2 {
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  del {
    color: rgba(0, 0, 0, 0.3);
  }
  ```

  
### 事件修饰符
* .stop
    * 阻止单击事件冒泡
* .prevent
    * 提交事件不再重载页面
* .capture
    * 使用事件捕获模式
* .self
    * 只有当事件在该元素本身被触发时（不包含子元素）才触发回调
* .once
    * 事件只触发一次（vue 2.1.4新增）
* 修饰符串联
    * 例子
### 按键修饰符
* .enter
    * keyCode
    * .enter

* .tab

* .delete
    * (捕获 “删除” 和 “退格” 键)

* .esc

* .space

* .up

* .down

* .left

* .right

* 组合使用,单独是使用的话,和click都是一样的,这里组合使用有点特殊,使用  .  进行连接简单给个例子
    ```
    <div id="app">
    <button @click.ctrl="num++">num+1</button>
    {{num}}
    </div>
    
    new Vue({
      el: "#app",
      data: {
      	num:0
      }
    })
    ```

    
### vue2.1.0新增 按键修饰符
* .ctrl
* .alt
* .shift
* .meta
## 表单控件绑定
### 基础用法
* 文本

    ```
    <div id="app">
      <h2>{{msg}}</h2>
      <br>
      <input type="text" v-model="msg">
    </div>
    
    new Vue({
      el: "#app",
      data: {
       msg:'万年的msg'
      }
    })
    ```

* 多行文本---注意了啊:在文本区域插值( `<textarea></textarea>` ) 并不会生效，应用 `v-model` 来代替 

    ```
    <div id="app">
    <p  style="white-space: pre">
      {{msg}}
    </p>
      <br>
      <textarea type="text" v-model="msg"></textarea>
    </div>
    ```

    

* 复选框
    * 单个复选框(直接绑定true,false)

      ```
      <div id="app">
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
      </div>
      
      new Vue({
        el: "#app",
        data: {
         checked:true
        }
      })
      ```

    * 多个复选框(将选中的所有value绑定到一个数组)

      ```
      <div id="app">
          <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
          <label for="jack">Jack</label>
          <input type="checkbox" id="john" value="John" v-model="checkedNames">
          <label for="john">John</label>
          <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
          <label for="mike">Mike</label>
          <br>
      	{{checkedNames}}
      </div>
      
      new Vue({
        el: "#app",
        data: {
          checkedNames:[]
        }
      })
      ```

      

* 单选按钮(绑定选中的单选框的value)
    ```
    <div id="app">
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    </div>
    
    new Vue({
      el: "#app",
      data: {
        picked:''
      }
    })
    ```

    

* 选择列表(不管是单选还是多选,v-model都要绑定到select元素上)
    * 单选列表(绑定到被选中项的value)
        ```
        <div id="app">
            <select v-model="selected">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>
        
        new Vue({
          el: "#app",
          data: {
            selected:''
          }
        })
        ```

        

    * 多选列表(绑定一个数组,数组的内容是所有的选中项的value)

        ```
        <div id="app">
        <select v-model="selected" multiple>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br>
        <span>Selected: {{ selected }}</span>
        </div>
        
        new Vue({
          el: "#app",
          data: {
            selected: []
          }
        })
        ```

        

    * 动态选项
        ```
        <div id="app">
        <select v-model="selected">
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
        <span>Selected: {{ selected }}</span>
        </div>
        
        new Vue({
          el: "#app",
          data: {
         		selected: 'A',
            options: [
              { text: 'One', value: 'A' },
              { text: 'Two', value: 'B' },
              { text: 'Three', value: 'C' }
            ]
          }
        })
        ```
### 修饰符
* .lazy
    * 由原有的input事件变更为change事件
        ```
        <div id="app">
          <input type="text" v-model.lazy="msg">
          {{msg}}
        </div>
        
        new Vue({
          el: "#app",
          data: {
            msg:'万年的msg'
          }
        })
        ```

* .number
    * 将输入的类型转换成数字类型（NaN则还是原有类型）
* .trim
    * 去除两端空白

        
算了,这点太简单了,不给例子了,自己写去吧,别来烦我,有不会的群里问......

### v-model与组件
## 组件
### 使用组件
* 注册
    * 注意事项
        * 在初始化根实例前一定要确保注册了组件
        * 名称最好 小写（可以使用短杆）

        ```
        <div id="app">
          <my-comp></my-comp>
        </div>
        
        
        Vue.component('my-comp',{
        	template:'<h3>我是新出炉的组件</h3>'
        })
        new Vue({
          el: "#app",
          data: {
           
          }
        })
        ```

* 局部注册
    ```
    <div id="app">
      <my-comp></my-comp>
    </div>
    
    new Vue({
      el: "#app",
      components:{
      	'my-comp':{template:'<h3>我是新出炉的组件</h3>'}
      },
      data: {
       
      }
    })
    ```

    

* DOM模板解析说明
    * 自定义组件在这些元素内受限
        * ul

        * ol

        * table

        * select

        * 概要: 解决方案是 使用 特殊的is属性

            ```
            <div id="app">
             <table>
               <tr>
               <my-comp></my-comp>//注意:这样写是绝对错误的,因为tr中只允许有td,这样写他是不认识滴
               </tr>
             </table>
            </div>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 上边是错误的
            
            
            ---------------------------------下边是正确的-----------------------------------
            <div id="app">
             <table>
               <tr>
                 <td is="my-comp"></td>
               </tr>
             </table>
            </div>
            
            new Vue({
              el: "#app",
              components:{
              	'my-comp':{
               		 template:'<td>我是组件td</td>'
                }
              },
              data: {
               
              }
            })
            ```

            

    * 不受限的情况--使用字符串模板
        * <script type="text/x-template">  怎么用呢?给大家来个例子吧!

          ```
          -------------------------------HTML-----------------------------------------
          <div id="app">
           <table>
             <tr>
             <template>
                 <my-comp></my-comp>
             </template>
             </tr>
           </table>
          </div>
          
          <script type="text/x-template" id="myComponent">
                      <td>This is a component!</td>
          </script>
          
          -----------------------------------JS----------------------------------
          new Vue({
            el: "#app",
            components:{
            	'my-comp':{
             		 template:'#myComponent'
              }
            },
            data: {
             
            }
          })
          ```

          

        * JavaScript内联模板字符串(第二种也给大家解释一下是什么意思,什么是字符串模板)

          ```
          <div id="app">
           <table>
             <tr>
             <template>  //这个就是字符串模板
                 <my-comp></my-comp>
             </template>
             </tr>
           </table>
          </div>
          ```

          

        * .vue组件  (第三种不解释了,用了那么多遍了,要是还不会,我就开始疯狂嘲笑你)

    * data必须是函数,在组件中使用data中定义的数据,必须使用函数返回,其实这事要说为啥,还得从根上说,我自己的理解,最根本的三个字就是作用域,目的就是为了防止组件中使用的data和vue实例中的data进行相互污染,有机会的话可以给大家讲一下,但是这不是三句两句就能讲清楚的,门票一人5毛怎么样?

        ```
        <div id="app">
        <mycomp></mycomp>
        </div>
        
        new Vue({
          el: "#app",
          components:{
          	'mycomp':{
           		 template:'<button>{{btncount}}</button>',
               data(){
                  return {btncount:8}
                }
            }
          },
          data:{
          	btncount:10
          }
        })
        ```

        
### Prop（子组件从父组件获得数据）
* 使用prop传递数据
    * ```
        <div id="app">
            <child msg="我是来自于父组件的内容"></child>
        </div>
        
        new Vue({
          el: "#app",
          components:{
          	'child':{
            	props:['msg'],
            	template:'<h2>{{msg}}</h2>'
            }
          }
        })
        ```

    * ```
        		动态绑定父组件中的数据
        <div id="app">
          <input type="text" v-model="fathertext">
              {{fathertext}}
          <child :childText="fathertext"></child>
        </div>
        
        new Vue({
          el: "#app",
          components:{
          	'child':{
            	props:['childtext'],
            	template:'<h1>{{childtext}}</h1>'
            }
          },
          data: {
          	fathertext:''
          }
        })
      ```

    * 

    * props注意事项

        * 一般情况下是数组形式，如果要想规定props的数据类型（后面用中括号 [ ]）。默认值等（见props验证），则是对象了（后面用花括号  {  }）

* 关于命名:要不然全小写,要不然kebabCase（驼峰式),kebab-case（短横线隔开式）Vue 能够正确识别出小驼峰和下划线命名法混用的变量，如这里的`forChildMsg`和`for-child-msg`是同一值。 

* ,如果出不来,先检查一下命名,看个例子:

    ```
    老湿老湿,帮我看下我写的这个哪里错了?---呵呵呵,我哪知道,我也不会
    
    <div id="app">
      <input type="text" v-model="msg">
      <child :childMsg="msg"></child>
    </div>
    
    new Vue({
      el: "#app",
      components:{
      	child:{
        	template:'<h1>{{childMsg}}</h1>',
      	    props:['childMsg']
        }
      },
      data: {
       msg:'apple'
      }
    })
    ```

    

* 动态Prop（使用v-bind）:在模板中，要动态地绑定父组件的数据到子组件模板的 props，和绑定 Html 标签特性一样，使用v-bind绑定 

    * 局部注册组件
    * 全局注册组件

* 字面量语法vs动态语法

* 单向数据流
    * 解释
        * 父组件数据更新后，子组件的所有prop都会更新为最新值，但是反过来就不会。（注意 ：如果prop为数组或对象时，子组件改变prop，父组件的状态也会受到影响，因为数组或对象是引用类型，他们指向同一个内存空间。）如果子组件的prop值被修改，则vue会给出警告。试一下下边这个例子

          ```
          <div id="app">
          <parent></parent>
          </div>
          
          let childNode = {
           template: `
               <div class="child">
                <div>
                 <span>子组件数据</span>
                 <input v-model="forChildMsg"/>
                </div>
                <p>{{forChildMsg}}</p>
               </div>`,
           props: {
            "for-child-msg": String
           }
          };
          let parentNode = {
           template: `
               <div class="parent">
                <div>
                 <span>父组件数据</span>
                 <input v-model="msg"/>
                </div>
                <p>{{msg}}</p>
                <child :for-child-msg="msg"></child>
               </div>
              `,
           components: {
            child: childNode
           },
           data() {
            return {
             msg: "default string."
            };
           }
          };
          
          new Vue({
            el: "#app",
            components:{
            	parent:parentNode
            }
          })
          ```

    * 特殊情况应对方法
        * prop作为初始值传入后，可能子组件想把它当做局部数据来用的情况
            * 方法：定义一个局部变量，并用prop的值初始化它

              ```
              props: ['initialCounter'],
              data: function () {
                return { counter: this.initialCounter }
              }
              //直接使用counter作为子组件的局部变量就可以了
              ```

        * prop作为初始值传入，可能子组件处理成其他数据输出的情况,比如处理成去空格并大写
            * 方法：定义一个计算属性，处理prop的值并返回

              ```
              props: ['size'],
              computed: {
                normalizedSize: function () {
                  return this.size.trim().toLowerCase()
                }
              }
              ```

              

* prop验证
    * 例子--代码篇

      ```
      Vue.component('example', {
        props: {
          // 基础类型检测 (`null` 意思是任何类型都可以)
          propA: Number,
          // 多种类型
          propB: [String, Number],
          // 必传且是字符串
          propC: {
            type: String,
            required: true
          },
          // 数字，有默认值
          propD: {
            type: Number,
            default: 100
          },
          // 数组/对象的默认值应当由一个工厂函数返回
          propE: {
            type: Object,
            default: function () {
              return { message: 'hello' }
            }
          },
          // 自定义验证函数
          propF: {
            validator: function (value) {
              return value > 10
            }
          }
        }
      })
      ```

      
### 自定义事件（子组件将数据传回父组件）
* 使用v-on绑定自定义事件
    * 给组件绑定自定义事件例子（用v-on来监听子组件触发的事件）

    * 给组件绑定**原生事件**例子--使用native修饰符

      ```
      <div id="app">
        <btncomp @click.native="alertE"></btncomp>
      </div>
      
      new Vue({
        el: "#app",
       	components:{
        	btncomp:{
          	template:'<button>点击我弹出</button>'
          }
        },
        methods:{
        	alertE(){
          	alert(777)
          }
        }
      })
      ```

* .sync修饰符（vue 2.3）
    * 目的：使父子组件实现prop类似“双向数据绑定”（默认子组件无法更改prop的值，上边已经说到了,但是使用sync后子组件可以改变prop 的值，并传回父组件）

    * 使用范例
        ```
        <div id="app">
            <child :name.sync="name"></child>  //其实不加也能更改,但是会报错
            <button type="button" @click="changePropsInFather">在父组件中将props值改变为'props'</button>
          </div>
          
            Vue.component('Child', {
              template: `<h1 @click="changePropsInChild">hello, {{name}}</h1>`,
              props: {
                name: String,
              },
              methods:{
                changePropsInChild(){
                  this.name = 'I am from child'
                }
              },
            })
            // 实例化一个Vue对象
            const app = new Vue({
              el: '#app',
              data(){
                return {
                  name: 'world'
                }
              },
              methods:{
                changePropsInFather(){
                  this.name='I am from father'
                },
              },
            })
        ```

* 使用自定义事件的表单输入组件

    * v-model的语法糖(可能之前我在CNODE课程中讲过,但是提的不是特别的仔细,这里还是给大家再说一下)

        ```
         <div id="app">
             <input v-model="price">
         </div>
         
          new Vue({
             el: '#app',
             data: {
                  price: ''
             }
         });
        ```

        我们对v-model已经再熟悉不过了,一般都是像上边这样的用法,但是v-model只是一个语法糖,它的真身是下边这样:

        ```
        <div id="app">
        <input type="text" :value="price" @input="price = $event.target.value">{{price}}
        </div>
        
          new Vue({
             el: '#app',
             data: {
                  price: ''
             }
         });
        ```

        

    * 例子

        * html及实例部分和注册组件部分

          ```
          <div id="app">
            <price-input :value="price" @input="isinputing"></price-input>
            {{price}}
          </div>
          
          new Vue({
            el: "#app",
            components:{
            	'price-input':{
              	template:"<input type='text' @input='update($event.target.value)' />",
                props:['value'],
                methods:{
                	update(val){
                  	this.$emit('input',val)
                  }
                }
              }
            },
            data: {
              price:''
            },
            methods: {
            	isinputing: function(val){//此处的value就是子组件传递过来的
                  this.price = val;
              }
            }
          })
          ```

### 非父子组件通信

* 非父子组件通信(1 父传子是用props  2 子传父在vue中是不允许的，因为vue只允许单向数据传递，这时候我们可以通过触发事件来通知父组件改变数据，从而达到改变子组件数据的目的. 3 那么非父子组件之间通信怎么搞??????)

    * 简单的场景---采用空实例作为中央事件总线,原理就是找一个人来当作一个中转站！ 

      ```
      
       <div id="app1" @click="toApp2">
          我是组件一,点击我给二传值
        </div>  <br>
         <div id="app2">
           {{app2msg}}
         </div>
      
      var bus = new Vue();  // 创建事件中心,创建中转站
      new Vue({
        el: "#app1",
        data: {},
        methods: {
        	toApp2: function(){
          	bus.$emit('change','上山打老虎')  //使用中转站触发
          }
        }
      })
      
      new Vue({
        el: "#app2",
        data: {
        	app2msg:''
        },
        created(){
        	bus.$on('change',(val)=>{
          	this.app2msg = val; //在组件二创建完成的时候就使用中转站进行监听
          })
        }
      })
      ```

      

    * 复杂的场景---专门的状态管理模式vuex

### 使用Slot分发内容
* 内容分发概念
    * 为了让组件可以组合（如本子主题的例子），因此需要混合父组件的内容与子组件的自己模板，这一过程就称作内容分发。
        ```
        <app>
          <app-header></app-header>
          <app-footer></app-footer>
        </app>
        
        之前我们的组件,如果给app指定了模板,那么里边的app-header和foot组件的内容就会被覆盖,因此,为了让他们能够组合.需要混用,这就是内容分发
        ```

* 编译作用域
    * 分发内容是在父作用域内编译的
* 单个slot（无具名slot）
    * 为什么用slot
        * 当父组件中有内容（即自定义的标签名之间有元素--见本子主题的例子）   子组件模板中无slot时，则父组件中的内容会被丢弃。

            ```
            <div id="app">
              <my-comp>
                <p>我是组件中的内容</p>  //这个p会被覆盖
              </my-comp>
            </div>
            
            new Vue({
              el: "#app",
              components:{
              	'my-comp':{
                	template:'<h1>我是一个组件</h1>'
                }
              }
            })
            ```

            

            * 那么单个slot怎么用呢?

                ```
                <div id="app"> 
                <children> 
                <span>12345</span> 
                <!--上面这行不会显示--> 
                </children> 
                </div> 
                
                var vm = new Vue({ 
                el: '#app', 
                components: { 
                children: { //这个无返回值，不会继续派发 
                	template: "<button><slot></slot>(我是button)</button>"
                } 
                } 
                }); 
                ```

    * 当父组件中有内容时
        * 子组件中的slot会被父组件中内容所替换。（slot标签也会被替换掉）
    * 当父组件中无内容时
        * 子组件中slot内容会被显示出来
* 具名slot
    * 用法：保子引父（保持子组件模板，引入父组件参数）--严格按照子组件的模板顺序来即：遇到具名slot对应的元素就渲染相应的元素，遇到不具名的slot，则会渲染除了具名slot对应的元素以外的所有元素。

        ```
        <div id="app">
          <children>
            <span slot="first">12345</span>
            <span slot="second">56789</span>
            <!--上面这行不会显示-->
          </children>
        </div>
        
        var vm = new Vue({ 
        el: '#app', 
        components: { 
          children: { //这个无返回值，不会继续派发 
            template: "<button><slot name='first'></slot>我是button<slot name='second'></slot>所以使用button标签</button>"
          } 
        } 
        }); 
        总结:说白了,就是多一个name属性.没啥稀奇玩意
        ```

* 作用域插槽（特殊的插槽）
    * 作用：使用可复用模板替代已渲染元素
    * 用法：同具名slot类似，都是严格按照子组件的模板顺序渲染，**只不过遇到slot元素时会将父组件中的template元素里的元素全部渲染**
        * 列表组件例子

            ```
            <div id="app">
            <child :items="items">
                <template slot="item" scope="props">
                    <!--必须存在的具有 scope属性的 template元素（作用域插槽的模板），
                    props临时的变量名称，接受子组件中传递的props对象-->
                    <!--slot = “item”是具名 slot的用法。-->
                    <li>
                        {{props.tex}}
                        <!--引用子组件中绑定的tex属性值。-->
                    </li>
                </template>
            </child>
            </div>
            
            
            Vue.component('child',{
                    props:["items"],
                    template:'<ul><slot name="item" v-for="item in items" v-bind:tex="item.text"></slot></ul>'
                });
            
            new Vue({
                el:'#app',
                data:{
                    items:[
                        {text:'老虎'},
                        {text:'棒子'},
                        {text:'鸡'}
                    ]
                }
            })
            ```

            
### 动态组件
* 使用is属性（注意，is前使用了v-bind！！！通过**is**来决定那个组件被渲染显示 ）

    ```
    
     <div id="app">
        <component v-bind:is="show"></component>
        <button v-on:click="changeShow">change show</button> 
     </div>
     
          var app=new Vue({
                el:'#app',
                data:{
                    show:'tem1'
                },
                components:{
                    tem1:{
                        template:'<div>11111111111</div>'
                    },
                      tem2:{
                        template:'<div>22222</div>'
                    },
                      tem3:{
                        template:'<div>333333</div>'
                    }
                },
                methods:{
                    changeShow:function(){
                        if(this.show=='tem1'){
                                this.show='tem2'
                        }else  if(this.show=='tem2'){
                                this.show='tem3'
                        }else{
                             this.show='tem1'
                        }
                    }
                }
            })
    
    ```

    

* keep-active
    * 作用：可保留组件状态或避免重新渲染（包裹动态组件时会缓存不活动的组件实例而不是销毁它们）配合 <keep-alive>使用时，可以保留组件状态避免重新渲染（和v-show 比较的差别是v-show 是一开始就渲染的所有组件，而keep-alive 并不是一开始就渲染好所有组件，而已保留渲染过的组件 

    * 注意事项：使用环境应该是较大页面频繁切换的情景下 

    * 用法

        ```
                <div id="app">
                    <component v-bind:is="show"></component>
                    <button v-on:click="changeShow">change show</button>
                </div>
                
                         var app=new Vue({
                    el:'#app',
                    data:{
                        show:'tem1'
                    },
                    components:{
                        tem1:{
                            template:'<div>11111111111</div>'
                        },
                          tem2:{
                            template:'<div>22222</div>'
                        },
                          tem3:{
                            template:'<div>333333</div>'
                        }
                    },
                    methods:{
                        changeShow:function(){
                            if(this.show=='tem1'){
                                    this.show='tem2'
                            }else  if(this.show=='tem2'){
                                    this.show='tem3'
                            }else{
                                 this.show='tem1'
                            }
         
                        }
                    }
         
                })
        ```

        
坚持学习.路在脚下

