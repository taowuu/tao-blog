# 关于 dom
> 从 html 解析出来的树
## dom 节点操作
```javascript
document.getElementById('div1')

document.getElementsByTagName('div') // 集合

document.getElementsByClassName('container') // 集合

document.querySelectorAll('p')
const p1 = pList[0]
// property 形式
p1.style.width = '100px'
p1.className = 'red'
console.log( p1.className )
console.log(p1.nodeName)
console.log(p1.nodeType) // 1
// attribute
p1.setAttribute('style', 'font-size: 50px;')
console.log( p1.getAttribute('style') )
```
## dom 结构操作
```javascript
// 新建节点
document.createElement('p')
// 插入节点
div1.appendChild(newP)
// 获取父元素
console.log( p1.parentNode ) 
// 获取子元素列表
const div1ChildNodes = div1.childNodes
const div1ChildNodesP = Array.prototype.slice.call(div1.childNodes).filter(child => {
    // 筛选 p 标签
    if (child.nodeType === 1) {
        return true
    }
    return false
})
// 删除子元素
div1.removeChild( div1ChildNodesP[0] )
```
## dom 性能优化
### dom 查询做缓存
```javascript
const pList = document.getElementsByTagName('p')
const length = pList.length
for(let i = 0; i < length; i++) {
    // 缓存 length
    // 只进行一次 dom 查询
}
```
### dom 频繁操作改为一次
```javascript
const list = document.getElementById('list')
// 创建一个文档片段，此时还没有插入到 DOM 结构中
const frag = document.createDocumentFragment()
for (let i  = 0; i < 20; i++) {
    const li = document.createElement('li')
    li.innerHTML = `List item ${i}`
    // 先插入文档片段中
    frag.appendChild(li)
}
// 都完成之后，再统一插入到 DOM 结构中
list.appendChild(frag)
```
