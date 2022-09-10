# typeof 和深拷贝
## typeof
> 识别所有值类型
> 识别函数
> 判断是否引用类型
```javascript
let a
console.log(typeof a) // undefined
let b = 'b'
console.log(typeof b) // string
let c = 100
console.log(typeof c) // number
let d = true
console.log(typeof d) // boolean
let e = Symbol('e')
console.log(typeof e) // symbol
const f = function() {}
console.log(typeof f) // function
// 能识别引用类型但不能继续识别
console.log(typeof null) // object
console.log(typeof [1, 2]) // object
console.log(typeof {x: 100}) // object
```

---
## 深拷贝
> 递归复制原对象的属性到新对象使两者地址不同  
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