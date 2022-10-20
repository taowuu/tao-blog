# 前端面试题之 Vue 篇

## computed / watch
- computed 用于产生新数据
- watch 用于监听现有数据
- computed 有缓存

## 组件通信的方式
- prop / emit
- eventbus
- attrs
- parent
- refs
- provide / inject

## 每个生命周期都做了什么
1. before create
    - 创建空白 Vue 实例
    - data / method 未初始化
2. created
    - 完成响应式绑定
    - data / method 可调用
    - 未开始渲染模板
3. before mount
    - 编译模板 render 生成 VDOM
    - 没有开始渲染 DOM
4. mounted
    - 完成 DOM 渲染
    - 组件创建完成
    - 进入运行阶段
5. before update
    - data 发生变化后准备更新 DOM
6. updated
    - data 变化且 DOM 更新完成
7. before unmount
    - 组件进入销毁阶段
    - 可解绑事件
8. unmounted
    - 组件销毁完成

## nextTick
- mounted / updated 都不能保证组件挂载完成
- nextTick 可保证组件挂载完成

## Ajax 放在哪个生命周期
- mounted
- 异步渲染开始时可能会重新 created 导致多次 Ajax 调用

## Vue / React Diff
- React 仅右移动 把原来右边挤到左边
- Vue2 双端比较
- Vue3 最长递增子序列作为整体

## for key
- Diff 会根据 key 判断元素是否删除
- 匹配了 key 可以只移动节点 性能好
- 未匹配 key 则删除重新渲染 性能差

## 内存路由
- 在当前页面触发不同组件的渲染
- 路由不会变化

## 遇到的坑
- 全局变量未销毁导致内存泄漏
- 响应式缺陷
- 路由切换滚到顶部
    - 缓存原页面数据和 scrolltop

## 如何统一监听组件报错
- errorCapture
    - 监听下级
    - 返回 fasle 不会向上传播
- errorHanler
    - 监听所有组件

## v-show / v-if
- v-show 通过 display 控制显示和隐藏
- v-if 是组件真正的渲染和销毁
- 频繁切换显示用 v-show

## v-model
- 绑定 input 事件获取目标值
- data 更新触发重新渲染

## data 必须是函数
- 每个组件实际是一个类
- 组件实例化后可以保证数据的独立

## 相同组件逻辑抽离
- mixin 变量来源不明确
- 组合式 API

## 何时使用异步组件
- 加载大组件
- 路由异步加载

## keep-alive
- 不需要重复渲染的组件
- 多个静态标签切换

## brforeDestory
- off 解绑自定义事件
- 清除定时器
- 解绑自定义 DOM 事件

## Vue 为何是异步渲染
- 合并多次 data 修改提高渲染性能

## Vuex action / mutation
- mutation 操作是原子性 同步的
- action 可包含多个 mutation 可异步

## 