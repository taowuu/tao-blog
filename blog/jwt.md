# JSON Web Token
- 跨域认证解决方案

## JWT 的原理
- 服务器认证以后，生成一个 JSON 对象，发回给用户
- 用户与服务端通信的时候，都要发回这个 JSON 对象
- 为了防止用户篡改数据，服务器在生成这个对象的时候，会加上签名

## JWT 的数据结构
- Header（头部）
- Payload（负载）
- Signature（签名）
	- 指定一个只有服务器才知道的密钥（secret）
	```js
	HMACSHA256(
	  base64UrlEncode(header) + "." +
	  base64UrlEncode(payload),
	  secret)
	```

## JWT 的使用方式
- 放在 HTTP 请求的头信息 Authorization 字段
- 放在 POST 请求的数据体里面

## JWT 的缺陷
- 由于服务器不保存 session 状态，因此无法在使用过程中废止某个 token，或者更改 token 的权限
