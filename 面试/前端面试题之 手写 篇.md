# 1. 深拷贝
```js
const deepColne = obj => {
    // 你的代码
    // 
    // 递归拷贝
    // 终止条件
    if(typeof obj !== 'object' || obj === null) {
        return obj
    }
    // 初始化结果
    let res
    if(obj instanceof Array) {
        res = []
    } else {
        res = {}
    }
    // 遍历保存属性值
    for(let key in obj) {
        // 保证 key 不是原型上的属性
        if(obj.hasOwnProperty(key)) {
            res[key] = deepColne(obj[key])
        }
    }
    // 返回结果
    return res
}

const tao1 = {
    name: 'tao1',
    age: 20,
    addr: {
        city: 'sz'
    },
    skill: ['js', 'vue', 'node'],
}

const tao2 = deepColne(tao1)

tao2.name = 'tao2'
tao2.age = 30
tao2.addr.city = 'jp'
tao2.skill = ['cn', 'eng', 'jp']

console.log('tao1: ', tao1)
console.log('tao2: ', tao2)

// tao1:  {
//   name: 'tao1',
//   age: 20,
//   addr: { city: 'sz' },
//   skill: [ 'js', 'vue', 'node' ]
// }
// tao2:  {
//   name: 'tao2',
//   age: 30,
//   addr: { city: 'jp' },
//   skill: [ 'cn', 'eng', 'jp' ]
// }
```



# 3. 事件代理
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



# 5. 防抖
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>test</title>
</head>
<body>
    <input>
</body>
<script>
const debounce = (fn) => {
    // 你的代码
    // 防抖 -> 等你消停了再执行
    // 高频输入只执行一次
    // 
    let timer = null
    return function() {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
            // 保证只执行一次
            timer = null
        }, 1000)
    }
}

const input = document.querySelector('input')
input.addEventListener('keyup', debounce(function() {
    console.log(input.value)
}))
</script>
</html>
```

# 6. 节流
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>test</title>
</head>
<body>
    <input>
</body>
<script>
const throttle = (fn) => {
    // 你的代码
    // 节流 -> 按规定频率来执行
    // 一秒触发一次
    // 
    let timer = null
    return function() {
        if(timer) {
            return
        }
        timer = setTimeout(() => {
            fn()
            // 保证只执行一次
            timer = null
        }, 1000)
    }
}

const input = document.querySelector('input')
input.addEventListener('keyup', throttle(function() {
    console.log(input.value)
}))
</script>
</html>
```


# 8. `url` 参数转化为对象
```js
const queryToObj = () => {
    const res = {}
    const pList = new URLSearchParams(location.search)
    pList.forEach((val, key) => {
        res[key] = val
    })
    return res
}
// https://cn.bing.com/search?q=js&qs=n&form=QBRE&sp=-1&pq=js&sc=10-2&sk=&cvid=D67659431B10432D8D38207A4EF88565&ghsh=0&ghacc=0&ghpl=
console.log(queryToObj()) 
// {q: "js", qs: "n", form: "QBRE", sp: "-1", pq: "js", …}
```

# 9. `trim`
```js
const trim = s => {
    return s.replace(/^\s+/, '').replace(/\s+$/, '')
}

console.log(trim('  j s  ')) 
// j s
```

# 10. `isEqual`
```js
const isObject = (obj) => {
    return typeof obj === 'object' && obj !== null
}

const isEqual = (obj1, obj2) => {
    // 你的代码
    // 
    // 递归
    // 终止条件
    if (!isObject(obj1) || !isObject(obj2)) {
        // 值类型
        return obj1 === obj2
    }
    if (obj1 === obj2) {
        return true
    }
    // 先判断 key
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
    if (obj1Keys.length !== obj2Keys.length) {
        return false
    }
    // 再判断值
    for (let key in obj1) {
        const res = isEqual(obj1[key], obj2[key])
        if (!res) {
            return false
        }
    }
    return true
}

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
console.log( obj1 === obj2 )
// false
console.log(isEqual(obj1, obj2))
// true
```




