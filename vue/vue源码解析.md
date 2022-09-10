# vue 源码之 new Vue 发生了什么
* new 初始化会调用 this._init
* 合并配置
* 初始化生命周期
* 初始化事件中心
* 初始化渲染
* 初始化 data、props、computed、watcher
* 如果有 el 属性，则调用 vm.$mount 方法挂载 vm
# Vue 实例挂载的实现
* 不能挂载在 body、html
* 如果没有定义 render，则会把 el 或者 template 字符串转换成 render
* $mount 实际上会去调用 mountComponent 方法
* mountComponent 先实例化一个 Watcher，在它的回调函数中会调用 updateComponent
* 在 updateComponent 中调用 vm._render 方法先生成 vnode，最终调用 vm._update 更新 DOM
* Watcher 一是初始化的时候会执行回调函数，二是当 vm 实例中的监测的数据发生变化的时候执行回调函数
# render 的作用
* 通过 createElement 把实例渲染成 vnode
# virtual dom
* 用原生 js 对象去描述 dom 节点
* 频繁操作 dom 性能损耗高
# createElement
* 规范化 children 为 vnode
* vnode 的创建
    * str 类型
    * 组件类型
 