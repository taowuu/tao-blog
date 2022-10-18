# 前端面试题之 运行结果 篇

## 1
```js
function Foo() {
    Foo.a = function() { console.log(1) }
    this.a = function() { console.log(2) }
}
Foo.prototype.a = function() { console.log(3) }
Foo.a = function() { console.log(4) }

Foo.a() // 4
let obj = new Foo()
obj.a() // 2
Foo.a() // 1
```

## 2
```js
Promise.resolve().then(() => {
    console.log(0)
    return Promise.resolve(4)
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1)
}).then(() => {
    console.log(2)
}).then(() => {
    console.log(3)
}).then(() => {
    console.log(5)
}).then(() =>{
    console.log(6)
})
// 0 1 2 3 4 5 6
```

## 3
```js
let a = { n: 1 }
let b = a
a.x = a = { n: 2 }

console.log(a.x) // undefined
console.log(b.x) // { n: 2 }
```

## 4
```js
let a = {}, b = '123', c = 123
a[b] = 'b'
a[c] = 'c'
console.log(a[b]) // 'c'
```

## 5
```js
let a = {}, b = Symbol('123'), c = Symbol('123')
a[b] = 'b'
a[c] = 'c'
console.log(a[b]) // 'b'
```

## 6
```js
let a = {}, b = { key:'123' }, c = { key:'456' }
a[b] = 'b'
a[c] = 'c'
console.log(a[b]) // c
// 非字符串 symbol 调用 toString
// console.log(b.toString())
// console.log(c.toString())
```

## 7
```js
function changeArg(x) { x = 200 }

let num = 100
changeArg(num)
console.log('changeArg num', num) // 100

let obj = { name: 'tao' }
changeArg(obj)
console.log('changeArg obj', obj) // { name: 'tao' }

function changeArgProp(x) {
    x.name = 'sen'
}
changeArgProp(obj)
console.log('changeArgProp obj', obj) // { name: 'sen' }
```

## 8
```js
const res = [10, 20, 30].map(parseInt)
console.log(res)
// 拆解
[10, 20, 30].map((num, index) => {
    return parseInt(num, index)
})
// [ 10, NaN, NaN ]
```