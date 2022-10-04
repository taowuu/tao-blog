# 1. 深拷贝
```javascript
const deepClone = obj => {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    let res
    if (obj instanceof Array) {
        res = []
    } else {
        res = {}
    }
    for (let key in obj) {
        // 保证 key 不是原型的属性
        if (obj.hasOwnProperty(key)) {
            res[key] = deepClone(obj[key])
        }
    }
    return res 
}
// 
const obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']
}
// 
const obj2 = deepClone(obj1)
obj2.address.city = 'shanghai'
obj2.arr[0] = 'a1'
obj2.age = 30
console.log(obj1.address.city)
console.log(obj1.arr[0])
console.log(obj1.age)
```
# 2. 手写 bind
```javascript
Function.prototype.bind1 = function () {
    // 将参数拆解为数组
    const args = Array.prototype.slice.call(arguments)

    // 获取 this（数组第一项）
    const t = args.shift()

    // fn1.bind(...) 中的 fn1
    const self = this

    // 返回一个函数
    return function () {
        return self.apply(t, args)
    }
}

function fn1(a, b, c) {
    console.log('this', this)
    console.log(a, b, c)
    return 'this is fn1'
}

const fn2 = fn1.bind1({x: 100}, 10, 20, 30)
const res = fn2()
console.log(res)
```
# 3. 手写 promise 加载图片
```javascript
function loadImg(src) {
    const p = new Promise(
        (resolve, reject) => {
            const img = document.createElement('img')
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                const err = new Error(`图片加载失败 ${src}`)
                reject(err)
            }
            img.src = src
        }
    )
    return p
}

// const url = 'https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg'
// loadImg(url).then(img => {
//     console.log(img.width)
//     return img
// }).then(img => {
//     console.log(img.height)
// }).catch(ex => console.error(ex))
```
# 4. 手写事件代理
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>test</title>
</head>
<body>
    <div>
        <span>1</span>
        <button>2</button>
    </div>
</body>
<script>
const bindEvent = (elem, type, selector, fn) => {
    // 你的代码
    // elem 父元素, type 事件类型, selector 子元素, fn 回调
    if (fn == null) {
        fn = selector
        selector = null
    }
    elem.addEventListener(type, event => {
        const target = event.target
        if (selector) {
            // 代理绑定
            if (target.matches(selector)) {
                fn.call(target, event)
                // fn(event)
            }
        } else {
            // 普通绑定
            fn.call(target, event)
            // fn(event)
        }
    })
}

// 普通绑定
const div = document.querySelector('div')
bindEvent(div, 'click', function (event) {
    console.log(event.target)
    // 可代理两个元素
    // span button
})

// 代理绑定
// const div = document.querySelector('div')
// bindEvent(div, 'click', 'button', function (event) {
//     console.log(event.target)
//     // 只代理 button
//     // button
// })
</script>
</html>
```
# 5. 手写 ajax
```javascript
// readyState
// 0 未调用 send
// 1 已经调用 send 正在发送请求
// 2 send 完成已经接收到全部响应
// 3 正在解析响应
// 4 响应解析完成
const xhr = new XMLHttpRequest()
xhr.open('GET', '/data/test.json', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            // console.log(
            //     JSON.parse(xhr.responseText)
            // )
        } else if (xhr.status === 404) {
            console.log('404 not found')
        }
    }
}
// 
function ajax(url) {
    // 需要设置才能使用 cookie
    // 错误状态码不会 reject
    return fetch(url).then(res => res.json())
}
```
# 6. 跨越解决方案
* ajax 请求时浏览器要求前端和后端同源  
* 同源：协议，域名，端口一致
## jsonp
* script 可绕过跨越  
* 服务端可动态拼接数据返回 
```javascript
<script>
window.abc = function (data) {
    console.log(data)
}
</script>
<script src="http://localhost:8002/jsonp.js?username=tao&callback=abc">
// 后端返回 abc({name: 'tao'}) 前端就会自动调用
```
## cors
```javascript
Access-Control-Allow-Origin: '*';
// 接收跨越 cookie
Access-Control-Allow-Credentials: true;
```
# 7. 浏览器本地存储
## cockie
1. 用于浏览器和服务端通信  
2. 服务端 set cookie 后会保存在浏览器  
3. 浏览器每次请求会自动带上 cookie  
4. 4kb  
5. 增加请求数据量  
6. 作为后端的 sessionId  
## localStorage
1. 不会自动失效  
2. 5mb   
3. 不会随请求发送  
## sessionStorage
1. 浏览器关闭失效
2. 5mb   
3. 不会随请求发送
# 8.网页加载过程
## url 到页面
1. dns 解析域名为 ip 地址
2. 浏览器根据 ip 向服务器发送 http 请求
3. 服务器处理 http 请求返回给浏览器
## 渲染过程
1. 根据 html 渲染成 dom 树
2. 根据 css 生成 cssom
3. 将 dom 树和 cssom 合成渲染树
4. 根据渲染树渲染页面
5. 遇到 js 暂停渲染（共用一个线程
## load 和 DOMContentLoaded
* load -> 页面资源全部加载完
* DOMContentLoaded -> dom 渲染完
# 9.前端性能优化
## 让加载更快
1. 减少资源体积：压缩代码
2. 减少访问次数：合并代码，ssr 渲染，缓存
3. CDN（区域代理
## 让渲染更快
1. css 放 head，js 放 body 后
2. 尽早执行 js（DOMContentLoaded
3. 懒加载
4. dom 查询缓存
5. 合并 dom 操作
6. 节流防抖
## 缓存
1. 静态资源加哈希后缀
2. 文件不变则哈希不变则 url 不变
3. url 和文件不变则触发 304
# 10. 手写防抖
* 频繁触发一次执行（降低频率
```javascript
function debounce(fn, delay = 500) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}
input1.addEventListener('keyup', debounce(function (e) {
    console.log(input1.value)
}, 600))
```
# 11. 手写节流
* 把触发频率限定死
```javascript
function throttle(fn, delay = 100) {
    let timer = null
    return function () {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}
div1.addEventListener('drag', throttle(function (e) {
    console.log(e.offsetX, e.offsetY)
}))
```
# 12. web 安全
## XSS
* 嵌入 js 获取 cookie
* 解决：替换特殊字符
## XSRF
* 诱导用户点击链接执行恶意脚本
1. 使用 post
2. 增加 token 验证
# 13. var let const 的区别
1. var 有变量提升，其余没有
2. var let 可修改，const 不能
3. let const 有块级作用域，var 没有
# 14. typeof 能判断哪些类型
1. undefined string number boolean symbol
2. object
3. function
# 15. 列举强制和隐式类型转换
1. 强制：parseInt parseFloat toString
2. 隐式：if, ==, 逻辑运算, 拼接字符串
# 16. 手写 isEqual
```javascript
// 判断是否是对象或数组
function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
// 全相等（深度）
function isEqual(obj1, obj2) {
    if (!isObject(obj1) || !isObject(obj2)) {
        // 值类型（注意，参与 equal 的一般不会是函数）
        return obj1 === obj2
    }
    if (obj1 === obj2) {
        return true
    }
    // 两个都是对象或数组，而且不相等
    // 1. 先取出 obj1 和 obj2 的 keys ，比较个数
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
    if (obj1Keys.length !== obj2Keys.length) {
        return false
    }
    // 2. 以 obj1 为基准，和 obj2 一次递归比较
    for (let key in obj1) {
        // 比较当前 key 的 val —— 递归！！！
        const res = isEqual(obj1[key], obj2[key])
        if (!res) {
            return false
        }
    }
    // 3. 全相等
    return true
}

// 测试
const obj1 = {
    a: 100,
    b: {
        x: 100,
        y: 200
    }
}
const obj2 = {
    a: 100,
    b: {
        x: 100,
        y: 200
    }
}
// console.log( obj1 === obj2 )
console.log( isEqual(obj1, obj2) )
```
# 17. split 和 join 的区别
1. split 拆分为数组
2. join 合并为字符串
# 18. 数组的操作
1. pop 从数组末尾移除一个元素并返回
2. push 从数组末尾追加一个元素
3. shift 头移除
4. unshift 头添加
5. concat 拼接两个数组为新数组
6. map 处理每个元素并生成新数组
7. filter 判断每个元素并生成过滤后数组
8. slice 切片生成新数组
9. reduce 对每一项执行回调并返回最终回调结果
10. forEach 返回数组每个值
# 19. slice 和 splice
* slice 切片
* splice 剪切出来后拼接
# 20. map parse int
```javascript
const res = [10, 20, 30].map(parseInt)
console.log(res)

// 拆解
[10, 20, 30].map((num, index) => {
    return parseInt(num, index)
})
```
# 21. get post 区别
1. get 查询，post 提交
2. get 参数拼接在 url 上，post 在请求体
3. post 易于防止 csrf
# 22. call 和 apply 区别
1. 都用来绑定 this
2. call 参数一个个传入
2. apply 参数通过类数组传入
# 23. 事件代理是什么
1. 事件监听放在父容器上可监听到子元素的触发
# 24. 闭包是什么
1. 函数的执行导致函数被定义
2. 被定义的函数内引用到了它外部的变量
3. 导致这个变量过了生命周期还能访问到
4. 导致变量常驻内存得不到释放
# 25. 阻止事件冒泡和默认行为
1. event.stopPropagation()
2. event.preventDefault()
# 26. 如何减少 dom 操作
1. 缓存 dom 结果
2. 合并多次 dom 操作
# 27. == 和 === 的区别
1. === 值与类型都相等
2. == 会进行类型转化
3. == null 唯一使用情况
# 28. 函数声明和函数表达式区别
1. 函数声明会预加载
# 29. new object 和 object.create 区别
1. object.create 可指定原型
2. object 自带原型
# 30. 手写 trim
```javascript
function trim(s) {
    return s.replace(/^\s+/, '').replace(/\s+$/, '')
}
```
# 31. 捕获异常的方式
1. try catch
2. onerror（压缩代码需要 sourcemap 反查
# 32. 解析 url 参数
```javascript
function query(name) {
    const search = location.search
    const p = new URLSearchParams(search)
    return p.get(name)
}
```
# 33. url 参数转化为对象
```javascript
function queryToObje() {
    const res = {}
    const pList = new URLSearchParams(location.search)
    pList.forEach((val, key) => {
        res[key] = val
    })
    return res
}
```
# 34. 手写 flat
```javascript
function flat(arr) {
    // 验证 arr 中，还有没有深层数组 [1, 2, [3, 4]]
    const isDeep = arr.some(item => item instanceof Array)
    if (!isDeep) {
        return arr // 已经是 flatern [1, 2, 3, 4]
    }

    const res = Array.prototype.concat.apply([], arr)
    return flat(res) // 递归
}

const res = flat( [1, 2, [3, 4, [10, 20, [100, 200]]], 5] )
console.log(res)
```
# 35. 数组去重
```javascript
// // 传统方式
// function unique(arr) {
//     const res = []
//     arr.forEach(item => {
//         if (res.indexOf(item) < 0) {
//             res.push(item)
//         }
//     })
//     return res
// }

// 使用 Set （无序，不能重复）
function unique(arr) {
    const set = new Set(arr)
    return [...set]
}

const res = unique([30, 10, 20, 30, 40, 10])
console.log(res)
```
# 36. 是否用过 requestAnimationFrame
```javascript
// 3s 把宽度从 100px 变为 640px ，即增加 540px
// 60帧/s ，3s 180 帧 ，每次变化 3px

const $div1 = $('#div1')
let curWidth = 100
const maxWidth = 640

// // setTimeout
// function animate() {
//     curWidth = curWidth + 3
//     $div1.css('width', curWidth)
//     if (curWidth < maxWidth) {
//         setTimeout(animate, 16.7) // 自己控制时间
//     }
// }
// animate()

// RAF
function animate() {
    curWidth = curWidth + 3
    $div1.css('width', curWidth)
    if (curWidth < maxWidth) {
        window.requestAnimationFrame(animate) // 时间不用自己控制
    }
}
animate()
```
