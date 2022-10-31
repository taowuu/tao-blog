const arr = [1, 2, 3, 4, 5]

const iterator = arr.entries()
// next() -> { value: Array [index, item], done: ? }
console.log(iterator)
console.log(iterator.next()) // { value: Array [0, 1], done: false }
console.log(iterator.next()) // { value: Array [1, 2], done: false }
console.log(iterator.next()) // { value: Array [2, 3], done: false }
console.log(iterator.next()) // { value: Array [3, 4], done: false }
console.log(iterator.next()) // { value: Array [4, 5], done: false }
console.log(iterator.next()) // { value: undefined, done: true }

// 数组是一个特殊的对象
// key 是从 0 开始递增的数组
// 按顺序对应数组的每个元素

// next
const arr = [1, 2, 3, 4, 5]

const newArr = []

for(let i = 0; i < arr.length + 1; i++) {
    const item = iterator.next()

    !item.done && (newArr[i] = item.value)
}

console.log(newArr)
// [Array [0, 1], Array [1, 2], Array [2, 3], Array [3, 4], Array [4, 5]]


// 二维数组排序
const _arr = [
    [3, 2, 1],
    [354, 11,56]
]

function sorArr(arr) {
    let _it = arr.entries(),
        _doNext = true
    
    while(_doNext) {
        const _r = _it.next()

        if(!_r.done) {
            _r.value[1].sort((a, b) => a - b)
            _doNext = true
        } else {
            _doNext = false
        }
    }

    return arr
}

console.log(sorArr(_arr))
// [Array [1, 2, 3], Array [11, 56, 354]]

// for of 用于可迭代对象
const arr = [1, 2, 3, 4, 5]
const iterator = arr.entries()

for(let c of iterator) {
    const [i, v] = c
    
    console.log(i, v)
}

// 将类数组转化为迭代器
const o = {
    0: 1,
    1: 2,
    2: 3,
    length: 3,
    // [Symbol.iterator]: Array.prototype[Symbol.iterator]
}

for(let v of Array.from(o)) {
    console.log(v)
}

