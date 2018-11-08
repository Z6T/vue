```
改变数组某一项的方法:
	1. 直接改变对象的引用
	2. 可以使用push,shift等方法
	3. 可以使用vue的变异方法  Vue.set(vm.userinfo,2,{a:1})  == vm.$set(vm.userinfo,2,{a:1})
```

```
<table>
	<tr id="row"></tr>  注意is的使用 table中只能使用tr
</table>
-------------------------------------------------------
在子组件中的data必须是一个function,来return 一个对象
目的是:为了让每一个子组件都有一个独立的数据存储,不希望和别的公用
-------------------------------------------------------
1 直接在DOM元素上ref="hello",通过this.$ref.hello 得到的是该DOM的引用,可以直接操作DOM
2 直接在组件上 ref="hello",通过this.$ref.hello得到的是该组件的引用,this.$ref.hello.data可以得到该data对象
```



```
子传父: 使用$emit
父传子:使用props接收
```

```
type
default
required
validator
```

```
给组件绑定原生事件（在组件上绑定的就是自定义事件<trow @delete="xxx"></trow> 要通过$emit才能触发）：

太麻烦，直接加原生可以吗?
当然可以  @click.native = "handle"  此时组件上绑定的就是原生事件了

```

```
非父子组件的传值：
1 vuex
2 发布订阅模式
```

