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
