# 前端面试题之 浏览器 篇

## 本地存储
- Cookie
    - 用于浏览器和后端通信
    - `Set-Cookie: a=b;` 后会自动保存在浏览器
    - 浏览器每次请求会自动带上
    - 4 KB
    - 增加请求数据量
    - 作为服务端的 sessionId
- localStorage
    - 不会自动失效
    - 不会随请求发送
    - 5 MB
- sessionStorage
    - 页面关闭失效
    - 不会随请求发送
    - 5 MB

## 网页加载过程
- 从 URL 到页面
    - DNS 解析域名为 IP
    - 浏览器根据 IP 向后端发送 HTTP 请求
    - 后端处理 HTTP 请求返回结果给浏览器
- 页面渲染过程
    - 根据 HTML 渲染成 DOM 树
    - 根据 CSS 生成 CSSOM
    - 将 DOM 树和 CSSOM 合成渲染树
    - 根据渲染树渲染页面
    - 遇到脚本暂停渲染因为共用一个线程

## 垃圾回收算法
- 引用计数 
    - 清除未被引用的
    - 循环引用情况有缺陷
- 标记清除
    - 从根遍历各个属性 得不到对象就删除

## 事件循环
- 微任务
    - Promise
    - MutaionObserver
- DOM 渲染
- 宏任务
    - setTimeout
    - setInterval
    - I/O
    - UI 交互

## repaint / reflow
- repaint 颜色变化
- reflow 位置变化

## 