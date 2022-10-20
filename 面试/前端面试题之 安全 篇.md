# 前端面试题之 安全 篇

## XSS / Cross Site Scripting
- 评论框输入脚本获取 Cookie
- 通过替换特殊字符解决

## CSRF / Cross Site Request Forgery
- 诱导用户点击链接执行恶意脚本
- 解决
    - 使用 POST
    - 后端下发 Token
    - 校验 Referer
    - `Set-Cookie: SameSite=Strict;` 仅允许同站请求携带

## 点击劫持
- 使用恶意遮罩覆盖网页原本内容诱导用户点击
- `X-Frame-Options: sameorigin` 禁止 iframe 跨域加载

## DDOS

## SQL 注入
