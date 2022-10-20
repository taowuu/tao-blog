```js
const flatDeep = (array) => {
    let result = []

    array.forEach(element => {
        if(Array.isArray(element)) {
            const temp = flatDeep(element)
            result = result.concat(temp)
        } else {
            result = result.concat(element)
        }
    })
    

    return result
}

const array = [0, 1, 2, [[[3, 4]]]]

console.log(flatDeep(array)) // [0, 1, 2, 3, 4]
```
