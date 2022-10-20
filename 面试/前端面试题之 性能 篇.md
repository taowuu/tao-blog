# 前端面试题之 性能 篇

## 让加载更快
- 压缩代码
- 合并代码
- SSR
- CDN

## 让渲染更快
- CSS 放 head
- JS 放 body 后
-  DOMContentLoaded 尽早执行脚本
- 懒加载
- DOM 查询缓存
- 合并 DOM operation
- 节流 防抖

## 缓存
- 静态资源加哈希后缀
    - 文件内容不变则哈希不变则 URL 不变
    - 浏览器自动触发 304

## 减少重排
- 集中修改样式
- BFC 先占据位置
- 批量操作 DOM
- CSS3 硬件加速

## 如何进行首屏优化
- SSR
- 分页
- 路由懒加载
- APP 预取
- 懒加载图片提前设置尺寸

## 如何渲染 10w 条数据
- 自定义 Node 中间层拆分数据
- 虚拟列表
    - 只渲染可视区域 随浏览器滚动创建销毁 DOM

## Vue 优化
- v-show
- v-for key
- computed
- keep-alive
- 异步组件
- 路由懒加载
- SSR
- v-for 不能和 v-if 同时使用 每次 for 会重新触发 if
- 自定义事件和 DOM 事件及时销毁
- Vue2 中 data 层级不能太深

## 如何排查性能问题
- 加载慢 
    - CDN
    - 路由懒加载
    - 组件异步加载
    - HTTP 缓存
- 渲染慢
    - 优化服务端接口
    - 优化组件内部逻辑
    - SSR

##