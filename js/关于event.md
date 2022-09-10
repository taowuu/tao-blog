# 关于 event
## 普通绑定
```javascript
// 普通绑定
const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', function (event) {
    // console.log(event.target) // 获取触发的元素
    event.preventDefault() // 阻止默认行为
    alert(this.innerHTML)
})
// 通用的事件绑定函数
function bindEvent(elem, type, selector, fn) {
    // sel 为实际绑定的对象
    // 处理 fn 未传参数
    if (fn == null) {
        fn = selector
        selector = null
    }
    elem.addEventListener(type, event => {
        const target = event.target
        if (selector) {
            // 代理绑定
            // 选择器符合时
            if (target.matches(selector)) {
                fn.call(target, event)
            }
        } else {
            // 普通绑定
            fn.call(target, event)
        }
    })
}
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', 'a', function (event) {
    event.preventDefault()
    console.log(this.innerHTML)
})
```

## 事件冒泡
```javascript
const p1 = document.getElementById('p1')
bindEvent(p1, 'click', event => {
    // event.stopPropagation() // 阻止冒泡
    console.log('p1')
})
const body = document.body
bindEvent(body, 'click', event => {
    // 点击 p1 会因冒泡触发
    console.log('body')
})
```
## 事件代理
```javascript
bindEvent(body, 'click', event => {
    // 可获取到容器内被点击的元素
    console.log(event.target)
})
```