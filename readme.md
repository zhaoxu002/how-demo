#面试用Project
## 面试题
`function foo(){
  function bar() {
    return 3;
  }
  return bar();
  function bar() {
    return 8;
  }
}
foo();//?`
答案为8，因为代码在执行前会提升声明。
第二次定义的`bar()`提前到了`return`之前，覆盖了第一次的声明。
***
`==`与`===`的不同在于是否严格判断，前者只要求值相等，后者则要求值与数据类型都相等。
例如
`"1" == true //true`
`"1" === true //false`
JavaScript判断`===`的效率比较高，所以应该尽量多用全等。
## 面试用html5 demo

index.html是不加js的单纯页面, 没有下方的tabs功能。
***
ionic.html是添加了ionic框架以实现tabs功能的版本，这里我引用了之前写的demo中的代码，有一些冗余。
另外在这个页面中也没实现背景的固定。
***
始终未实现的效果是那两个三角形缺口，我尝试过使用css3伪元素和background:linear-gradient等多种方式。
这些方式的问题都是是与box-shadow的效果结合不好，索性就注释掉了。
