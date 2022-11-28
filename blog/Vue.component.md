# Vue 函数组件
- 没有实例 (this
- 没有生命周期
- 不能使用 Composition API
- 它只是一个接受一些 prop 的函数
- 渲染快
- 
## 基本写法
```js
Vue.component('my-component', {
  functional: true,
  // Props 是可选的
  props: {
    // ...
  },
  // 为了弥补缺少的实例
  // 提供第二个参数作为上下文
  render: function(createElement, context) {
    // ...
  }
})
```

```html
<template functional>
  ...
</template>
```
