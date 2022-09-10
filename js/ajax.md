# 关于 ajax
## 手写
```javascript
// 0 未调用 send
// 1 已经调用 send 正在发送请求
// 2 send 完成已经接收到全部响应
// 3 正在解析响应
// 4 响应解析完成
const xhr = new XMLHttpRequest()
xhr.open('GET', '/data/test.json', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            // console.log(
            //     JSON.parse(xhr.responseText)
            // )
        } else if (xhr.status === 404) {
            console.log('404 not found')
        }
    }
}
xhr.send(null)
// 
function ajax(url) {
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                } else if (xhr.status === 404 || xhr.status === 500) {
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
    return p
}
// 
function ajax(url) {
    return fetch(url).then(res => res.json())
}
```
## 同源策略
> ajax 请求时浏览器要求前端和后端同源  
> 同源：协议，域名，端口一致  
## 跨越
### jsonp
> script 可绕过跨越  
> 服务端可动态拼接数据返回  
```html
<script>
    window.abc = function (data) {
        console.log(data)
    }
</script>
<script src="http://localhost:8002/jsonp.js?username=tao&callback=abc"></script>
<!-- 返回 abc({name: 'tao'}) 在前端调用-->
```
### cors
```javascript
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
// 接收跨越 cookie
Access-Control-Allow-Credentials: true
```
