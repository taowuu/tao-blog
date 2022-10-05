# 1. `load` 和 `DOMContentLoaded` 区别
- `load` -> 页面资源全部加载完
- `DOMContentLoaded` -> `dom` 渲染完

# 2. `var` `let` `const` 的区别
- `var` 有变量提升, 其余没有
- `var` `let` 可修改, `const` 不能
- `let` `const` 有块级作用域, `var` 没有

# 3. `typeof` 能判断哪些类型
- `undefined` `string` `number` `boolean` `symbol`
- `object`
- `function`

# 4. 列举强制和隐式类型转换
- 强制: `parseInt` `parseFloat` `toString`
- 隐式: `if`, `==`, 逻辑运算, 拼接字符串

# 5. `split` 和 `join` 的区别
- `split` 拆分为数组
- `join` 合并为字符串

# 6. 数组的操作
- `pop` 尾移除并返回
- `push` 尾追加
- `shift` 头移除
- `unshift` 头添加
- `concat` 拼接两个数组为新数组
- `map` 处理每个元素并生成新数组
- `filter` 判断每个元素并生成过滤后数组
- `slice` 切片生成新数组
- `reduce` 对每一项执行回调并返回最终回调结果
- `forEach` 返回数组每个值

# 7. `slice` 和 `splice` 区别
- `slice` 切片
- `splice` 剪切出来后拼接

# 8. `map` `parseInt`
```js
const res = [10, 20, 30].map(parseInt)
console.log(res)
// 拆解
[10, 20, 30].map((num, index) => {
    return parseInt(num, index)
})
// [ 10, NaN, NaN ]
```

# 9. `get` 和 `post` 区别
- `get` 查询, `post` 提交
- `get` 参数拼接在 `url` 上, `post` 在请求体
- `post` 易于防止 `csrf`

# 10. `call` 和 `apply` 区别
- 都用来绑定 `this`
- `call` 参数一个个传入
- `apply` 参数通过类数组传入

# 11. 事件代理
- 事件监听放在父容器上可监听到子元素的触发

# 12. 闭包
- 函数的执行导致函数被定义
- 被定义的函数内引用到了它外部的变量
- 导致这个变量过了生命周期还能访问到
- 导致变量常驻内存得不到释放

# 13. 阻止事件冒泡和默认行为
- `event.stopPropagation()`
- `event.preventDefault()`

# 14. 如何减少 `dom` 操作
- 缓存 `dom` 结果
- 合并多次 `dom` 操作

# 15. `==` 和 `===` 的区别
- `===` 需要值与类型都相等
- `==` 会进行类型转化
- `==` `null` 是唯一使用 `==` 情况

# 16. 函数声明和函数表达式区别
- 函数声明会预加载

# 17. `new object` 和 `object.create()` 区别
- `object.create()` 可指定原型
- `object` 自带原型

# 18. 捕获异常
- `try` `catch`
- `onerror` (压缩代码需要 `sourcemap` 反查

# 19. `requestAnimationFrame`
- 自动计算动画更新在 60 帧下的用时

# 20. `Ajax` `Fetch` `Axios` 区别
- 三者都用于网络请求
- `ajax` 是异步网络请求的技术统称
- `fetch` 是原生 api
- `axios` 是第三方网络请求库

# 21. 箭头函数缺点
- 没有 `arguments`
- 不能修改 `this`
- 对象方法不能获取到 `this`
- 无法作为构造函数
- 上下文回调函数无法获取 `this`
- `vue` 生命周期和 `method` 不能使用
- `class` 可以使用 (如 `react`

# 22. `for in` 和 `for of` 区别
- in 遍历 key (不能用于 map set
- of 遍历 val (不能用于对象
- in 用于枚举 (一一举例出来
- of 用于迭代 (可根据当前得到下一个

# 23. `map` 和 `object` 区别
- `map` 保持插入顺序
- `map` `key` 可以是任意类型
- `object` `key` 只能 数字 字符串 `symbol`

# 24. `for await of`
- 遍历异步

# 25. `HTMLCollection` 和 `NodeList` 区别
- `HTMLCollection` 与 `NodeList` 都是 `DOM` 节点的集合
- `NodeList` 包含 `Text` `Comment`
- `HTMLCollection` 只包 `ElementNode`

# 26. JS 严格模式有什么特点
- 全局变量必须声明
- 禁止使用 `with`
- 创建 `eval` 作用域
- 禁止 `this` 指向全局作用域
- 函数参数不能重名

# 27. `for` 为什么快于 `foreach`
- `foreach` 每次需要初始化函数

# 28. js brige
- `js` 调用原生 `app` `api` 的格式
- 使用 `url` `scheme` 唤醒 `app`

# 29. `requestIdleCallback` 和 `requestAnimationFrame` 区别
- `requestIdleCallback` 空闲时执行
- `requestAnimationFrame` 每次渲染完都执行

# 30. 移动端点击有 300ms 延迟
- 监听 touchend 使用自定义的 click
- 并把浏览器在300ms 之后的 click 事件阻止掉
- 现代浏览器改进 width=device-width

