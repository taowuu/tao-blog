# 1. 深拷贝
```js
const deepColne = obj => {
    // 你的代码
    // 
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

```
# 2. 