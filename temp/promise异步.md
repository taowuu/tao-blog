# promise 异步
## 单线程和异步
> js 是单线程语言，同时只能做一件事  
> web worker 可开启多进程  
> js 和 dom 共用一个线程，因为 js 可 修改 dom  
> 异步解决遇到同步任务阻塞的问题  
## 异步和同步
```javascript
// 异步 100 300 200
console.log(100)
setTimeout(() => {
    console.log(200)
}, 1000)
console.log(300)
// 同步 100 200 300
console.log(100)
alert(200)
console.log(300)
```

---
## promise
> 解决回调地狱
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
// 
const url1 = 'https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg'
const url2 = 'https://img3.mukewang.com/5a9fc8070001a82402060220-100-100.jpg'

loadImg(url1).then(img1 => {
    console.log(img1.width)
    return img1 // 普通对象
}).then(img1 => {
    console.log(img1.height)
    return loadImg(url2) // promise 实例
}).then(img2 => {
    console.log(img2.width)
    return img2
}).then(img2 => {
    console.log(img2.height)
}).catch(ex => console.error(ex))
```
