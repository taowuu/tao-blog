# 强缓存和协商缓存

## 强缓存
- Expires: 绝对时间的GMT格式的时间字符串
    - 当服务器与客户端时间偏差较大时，就会导致缓存混乱
- Cache-Control: max-age=3600
    - no-cache： 不使用本地缓存
    - no-store： 禁止游览器缓存
    - public： 可以被所有的用户缓存，包括终端用户和CDN等中间代理服务器
    - private：只能被终端用户的浏览器缓存，不允许CDN等中继缓存服务器对其缓存
- Cache-Control 优先级高

## 协商缓存
- 协商缓存是由服务器确定缓存资源是否可用
- Last-Modify 最后修改时间 -> If-Modify-Since 200/304
- Etag 唯一标识 -> If-None-Match 200/304
- 服务器会优先验证 ETag
