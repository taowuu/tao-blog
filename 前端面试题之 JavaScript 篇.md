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
```javascript
function bindEvent(elem, type, selector, fn) {
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
            }
        } else {
            // 普通绑定
            fn.call(target, event)
        }
    })
}

// 普通绑定
const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', function (event) {
    // console.log(event.target) // 获取触发的元素
    event.preventDefault() // 阻止默认行为
    alert(this.innerHTML)
})

// 代理绑定
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', 'a', function (event) {
    event.preventDefault()
    alert(this.innerHTML)
})
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
Access-Control-Allow-Origin: '*'
// 接收跨越 cookie
Access-Control-Allow-Credentials: true
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