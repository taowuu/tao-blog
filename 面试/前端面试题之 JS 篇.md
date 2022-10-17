# 前端面试题之 JS 篇

## `load` / `DOMContentLoaded` 区别
```js
document.addEventListener('load', (event) => {
    // 该事件 不可取消 不会冒泡
    console.log('页面资源全部加载')
})
```

```js
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM 完全加载以及解析')
})
```

## `var` / `let` / `const` 区别
- `var` 有变量提升
- `var` / `let` 可修改
- `let` / `const` 有块级作用域

## `typeof` 能判断哪些类型
- `undefined`
- `string`
- `number`
- `boolean`
- `symbol`
- `object`
- `function`

## 强制和隐式类型转换的区别
- `parseInt` `parseFloat` `toString`
- `条件判断` `比较运算` `逻辑运算` `拼接字符串`

## `split` / `join` 区别
```js
const str = 'a b c'
// 拆分为数组
const arr = str.split(' ')
console.log(arr) // ["a", "", "b", "c"]
```

```js
const arr = ["a", "b", "c"]
// 合并为字符串
const str = array.join(' / ')
console.log(str) // "a / b / c"
```

## 数组的操作有哪些
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

## `slice` /  `splice` 区别
```js
const arr = ["a", "b", "c"]
// 切片
// 不改变原数组
const arr1 = arr.slice(0, 1)
console.log(arr1) // ["a"]
```

```js
const arr = ["a", "b", "c"]
// 从下标 2 处 剪出 c 替换为 new c
// 改变原数组
arr.splice(2, 1, 'new c')
console.log(arr) // ["a", "b", "new c"]
```

## 闭包是什么
- 从内部函数访问外部函数的作用域
- 函数的执行导致函数被定义
- 被定义的函数内引用到了它外部的变量
- 这个变量过了生命周期还能访问到
- 导致变量常驻内存得不到释放

## 如何阻止事件冒泡和默认行为
```js
// 阻止事件冒泡
event.stopPropagation()
// 阻止监听同一事件的其他事件监听器被调用
event.stopImmediatePropagation()
// 默认行为
event.preventDefault()
```

## 减少 `DOM operation`
- 缓存 `DOM result`
- 合并多次 `DOM operation`

## `==` / `===` 区别
- `===` 比较类型与值
- `==` 类型转化后比较
- `== null` 是唯一使用 `==` 情况

## 函数声明和表达式的区别
- 函数声明会在代码执行前创建
- 会一直占用内存
- 函数表达式代码执行时临时创建
- 调用完后销毁

## `new Object()` / `Object.create()` 区别
- `Object.create()` 可指定原型
- `new Object()` 默认原型为 `Object`

## 捕获异常的方式
- `try` `catch`
- `object.addEventListener("error", fn)`
    - 压缩代码需要 `sourcemap` 反查

## `requestAnimationFrame`
- 自动计算动画在 60 帧下的用时

## `Ajax` / `Fetch` / `Axios` 区别
- 三者都用于网络请求
- `Ajax` 是异步网络请求的技术统称
- `Fetch` 是原生 `API`
- `Axios` 是第三方网络请求库

## 箭头函数有哪些坑
- 没有 `arguments`
- 不能修改 `this`
- 对象方法上不能获取到 `this`
- 无法作为构造函数
- 上下文回调函数无法获取 `this`
- `vue` 生命周期和 `method` 内不能使用
- `React class` 可以使用

## 22. `for in` 和 `for of` 区别
- in 遍历 key (不能用于 map set
- of 遍历 val (不能用于对象
- in 用于枚举 (一一举例出来
- of 用于迭代 (可根据当前得到下一个

## 23. `map` 和 `object` 区别
- `map` 保持插入顺序
- `map` `key` 可以是任意类型
- `object` `key` 只能 数字 字符串 `symbol`

## 24. `for await of`
- 遍历异步

## 25. `HTMLCollection` 和 `NodeList` 区别
- `HTMLCollection` 与 `NodeList` 都是 `DOM` 节点的集合
- `NodeList` 包含 `Text` `Comment`
- `HTMLCollection` 只包 `ElementNode`

## 26. JS 严格模式有什么特点
- 全局变量必须声明
- 禁止使用 `with`
- 创建 `eval` 作用域
- 禁止 `this` 指向全局作用域
- 函数参数不能重名

## 27. `for` 为什么快于 `foreach`
- `foreach` 每次需要初始化函数

## 28. js brige
- `js` 调用原生 `app` `api` 的格式
- 使用 `url` `scheme` 唤醒 `app`

## 29. `requestIdleCallback` 和 `requestAnimationFrame` 区别
- `requestIdleCallback` 空闲时执行
- `requestAnimationFrame` 每次渲染完都执行

## 30. 移动端点击有 `300ms` 延迟
- 监听 touchend 使用自定义的 click
- 并把浏览器在300ms 之后的 click 事件阻止掉
- 现代浏览器改进 width=device-width

## 31. `defer` 和 `async` 区别
- `defer` 并行下载 `js`, `dom` 解析完后再执行
- `async` 并行下载 `js` 后立即执行

## 39. `prefetch` 和 `dns-prefetch`
- `preload` 优先加载
- `prefetch` 空闲时加载
- `dns-prefetch` dns 预查寻
- `preconnect` dns 预连接

## 40. 网页多 `tab` 通讯
- `ws`
- `localstorage`
- `sharedworker` 

## 41. 网页和 `iframe` 通讯
1. `postMessage` 发送
2. `on message` 接受

## 42. `new` 原理
```js
function Student(name) {
    this.name = name
}
  
var stu = new Student('tao')

function Student(name) {
    // 创建临时对象保存 stu 的属性
    var temp = {}
    // 改变 this 指向
    this = temp
    // 改变原型
    this.__proto__ = Student.prototype
    this.name = name
    // 然后返回 这个 stu
    return this
}
```

## 43. `Object.create` 和 `{}` 区别
- `Object.create` 可以指定原型，创建一个空对象
- `{}` 就相当于 `Object.create(Object.prototype)`

## 44. DOM 结构转换为 vnode
```html
<div id="div1" style="border: 1px solid ##ccc; padding: 10px;">
    <p>一行文字<a href="xxx.html" target="_blank">链接</a></p>
    <img src="xxx.png" alt="图片" class="image"/>
    <button click="clickHandler">点击</button>
</div>
```
```js
const vnode = {
    tag: 'div', // <div>
    data: {
        id: 'div1',
        style: {
            'border': '1px solid ##ccc',
            'padding': '10px'
        }
    },
    children: [
        {
            tag: 'p', // <p>
            data: {},
            children: [
                '一行文字',
                {
                    tag: 'a', // <a>
                    data: {
                        href: 'xxx.html',
                        target: '_blank'
                    },
                    children: ['链接']
                }
            ]
        },
        {
            tag: 'img', // <img>
            data: {
                className: 'image', // 注意，这里要用 className
                src: 'xxx.png',
                alt: '图片'
            }
        },
        {
            tag: 'button', // <button>
            data: {
                events: {
                    click: clickHandler
                }
            }
            children: ['点击']
        }
    ]
}
```

## 45. 类数组
- 可以通过下标添加属性但 `length` 不会改变
- 原型上无 `push` 等方法

