# 前端面试题之 JS 篇

## load / DOMContentLoaded
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

## var / let / const
- var 有变量提升
- var / let 可修改
- let / const 有块级作用域

## typeo
- undefined
- string
- number
- boolean
- symbol
- object
- function

## 强制 / 隐式类型转换
- parseInt / parseFloat / toString
- 条件判断 / 比较运算 / 逻辑运算 / 拼接字符串

## split / join
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

## 数组操作
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

## `slice` /  `splice`
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

## 闭包
- 从内部函数访问外部函数的作用域
- 函数的执行导致函数被定义
- 被定义的函数内引用到了它外部的变量
- 这个变量过了生命周期还能访问到
- 导致变量常驻内存得不到释放

## 阻止事件冒泡和默认行为
```js
// 阻止事件冒泡
event.stopPropagation()
// 阻止监听同一事件的其他事件监听器被调用
event.stopImmediatePropagation()
// 默认行为
event.preventDefault()
```

## 减少 DOM 操作
- 缓存 DOM 结果
- 合并多次 DOM 操作

## `==` / `===`
- `===` 比较类型与值
- `==` 类型转化后比较
- `== null` 是唯一使用 `==` 情况

## 函数声明 / 表达式
- 函数声明会在代码执行前创建
- 会一直占用内存
- 函数表达式代码执行时临时创建
- 调用完后销毁

## `new Object()` / `Object.create()`
- `Object.create(Persion)` 可指定原型
- `new Object()` 相当于 `Object.create(Object.prototype)`

## 捕获异常
- try / catch
- `object.addEventListener("error", fn)`
    - 压缩代码需要 sourcemap 反查

## requestAnimationFrame
- 自动计算动画在 60 帧下的用时

## Ajax / Fetch / Axios
- 三者都用于网络请求
- Ajax 是异步网络请求的技术统称
- Fetch 是原生 API
- Axios 是第三方网络请求库

## 箭头函数缺陷
- 没有 arguments
- 不能修改 this
- 对象方法上不能获取到 this
- 无法作为构造函数
- 上下文回调函数无法获取 this
- Vue 生命周期和 method 内不能使用
- React class 可以使用

## for in / for of / forEach
- for in 遍历对象
- for of / forEach 遍历 Array / Map / Set / String

## Map / Object
- Map 保持插入顺序
- Map key 可以是任意类型
- Object key 只能 Number/ String / Symbol

## HTMLCollection / NodeList
- HTMLCollection / NodeList 都是 DOM 节点的集合
- NodeList 包含 Text / Comment
- HTMLCollection 只包含 ElementNode

## 严格模式
- 全局变量必须声明
- 禁止使用 with
- 创建 eval 作用域
- 禁止 this 指向全局作用域
- 函数参数不能重名

## for 为什么快于 forEach
- forEach 每次需要初始化函数

## JS Bridge
- 连接 JS 和 Native 的桥梁
- 使用 URL Scheme 唤醒 App

## requestIdleCallback / requestAnimationFrame
- requestIdleCallback 空闲时执行
- requestAnimationFrame 每次渲染完都执行

## 移动端点击 300ms 延迟
- 浏览器并不能判断用户是想要单击还是双击于是等待 300ms
- 禁止缩放 
    - `<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />`
- 改变视口
    - `<meta name="viewport" content="width=device-width" />`

## defer / async
- defer 并行下载脚本 DOM 解析完后再执行
- async 并行下载脚本后立即执行

## prefetch / dns-prefetch
- preload 优先加载
- prefetch 空闲时加载
- dns-prefetch DNS 预查寻
- preconnect DNS 预连接

## 网页多标签通讯
- WebSocket
- localStorage
- SharedWorker

## DOM 结构转换为 VNode
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
            tag: 'p',
            data: {},
            children: [
                '一行文字',
                {
                    tag: 'a',
                    data: {
                        href: 'xxx.html',
                        target: '_blank'
                    },
                    children: ['链接']
                }
            ]
        },
        {
            tag: 'img',
            data: {
                className: 'image',
                src: 'xxx.png',
                alt: '图片'
            }
        },
        {
            tag: 'button',
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

## 类数组
- 类似数组的对象
- 使用数字作为属性名称
- 需要具备 length 属性
- 类数组的设计目的是只让你遍历和访问下标

## 