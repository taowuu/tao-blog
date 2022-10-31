# 前端面试题之 网络 篇

## 跨域解决方案
- Ajax 要求 协议/域名/端口 相同
- JSONP / JSON with Padding
    - script 的无跨域限制
    - 服务端可以动态拼接数据返回
    - 前端定义回调函数 `window.callBack = function(data) {}`
    - 后端返回字符串 `callBack({name: 'tao'})`
    - 前端自动调用 callBack
- CORS / Cross Origin Resource Sharing
    - `Access-Control-Allow-Origin: '*';`
    - `Access-Control-Allow-Credentials: true; // 接收 Cookie`

## 三次握手 / 四次挥手
- 建立 TCP 连接确保双方都有收发数据的能力
- 通过 HTTP 协议传输内容
- 三次握手
    - c 发包 s 接收 (s 知道有 c 连接
    - s 发包 c 接收 (c 知道 s 收到消息
    - c 正式发数据
- 四次挥手
    - c 发包 s 接收 (s 知道请求结束
    - s 发包 c 接收 (c 等待关闭
    - s 发包 c 接收 (c 知道可以关闭
    - c 发包 s 接收 (s 正式关闭

## OPTIONS 请求
- OPTIONS 请求就是对跨域请求之间的一次预检查

## JWT / JSON Web Token
- 后端验证登录成功后返回 `Token`
- 前端自行存储
- 以后访问后端手动带上 `Token`

## Token / Cookie
- Token 需要自己传递
- 需要自己存储
- 没有跨域限制
- 保存用户全部信息

## Session / JWT
- Session 存储在服务端可以快速封禁某用户
- 占用服务端内存
- 多进程不好同步可以使用 Redis
- 有跨域限制
- JWT 不占用服务端内存 多进程无影响 无跨域
- 服务端密钥泄露则用户信息全部丢失
- 体积大于 Cookie

## SSO / 单点登录
- `Cookie: domain=google.com;` 实现跨域
- 登录校验都转发到 SSO
- Oauth 由第三方下发 Token 并且去第三方认证

## HTTP / UDP
- HTTP 应用层
- TCP / UDP 传输层
- TCP 有连接有断开 稳定传输
- UDP 无连接无断开 不稳定但效率高

## HTTP 1.0 / 1.1 / 2.0
- 1.0 GET / POST
- 1.1 缓存 / 长连接 / 断点续传206
- 2.0 压缩header / 服务端推送 / 多路复用 一次连接多个并行请求

## HTTPS 中间人攻击
- 中间人**伪造公钥**给客户端
- 通过**中间人的私钥解密**拿到客户端和服务端**通信的密钥**
- 解决
    - 服务端使用正规的证书响应请求
    - 对网站下发的公钥进行哈希校验

## WebSocket / HTTP
- WebSocket 可以双端通信
- WebSocket 没有同源限制
- WebSocket 建立连接后不再需要交换 header
- 都基于 TCP

## WebSocket / HTTP 长轮询
- HTTP 需要等待服务端返回才能再次请求
- WebSocket 可以双方任意发送

## GET / POST
- GET 发起查询请求
- POST 发起提交请求
- GET 参数拼接在 URL
- POST 参数拼接在请求体
- POST 易于防止 CSRF

## 