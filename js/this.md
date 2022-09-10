# this
> 函数执行时确认  
> 箭头函数的 this 取决于外部  
> new 实例的 this 为实例本身

---
## 函数执行时确认
```javascript
function f1() {
    console.log(this)
}
f1() // window
f1.call({x: 100}) // {x: 100}
const f2 = f1.bind({x: 200})
f2() // {x: 200}
```

---
## 箭头函数的 this
```javascript
const tao1 = {
    name: 'tao1',
    say() {
        console.log(this)
    },
    wait() {
        setTimeout(function() {
            console.log(this)
        })
    }
}
tao1.say() // tao1
tao1.wait() // window
// 
const tao2 = {
    name: 'tao2',
    say() {
        console.log(this)
    },
    wait() {
        setTimeout(() => {
            console.log(this)
        })
    }
}
tao2.say() // tao2
tao2.wait() // tao2
```

---
## 类中的 this
```javascript
class People {
    constructor(name) {
        this.name = name
    }
    say() {
        console.log(this)
    }
}
const tao = new People('tao')
tao.say() // tao 实例
```

---
## 手写 bind
```javascript
Function.prototype.myBind = function () {
    // 将参数拆解为数组
    const args = Array.prototype.slice.call(arguments)
    // 获取 this（挖出数组第一项）
    const t = args.shift()
    // f1.bind(...) 中的 f1
    const self = this
    return function () {
        return self.apply(t, args)
    }
}
// 
function f1(a, b, c) {
    console.log('this', this)
    console.log(a, b, c)
}
// 
const f2 = f1.myBind({x: 100}, 10, 20, 30)
const res = f2()
console.log(res) // this {x: 100}
```

---
## 原型链中的 this
```javascript
// say -> People
// tao -> Student
tao.say()
// 等价于
tao.__proto__.say.call(tao)
```
