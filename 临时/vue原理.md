# vue 原理
## 组件化
* 传统组件使用静态渲染
* 更新需要操作 dom
## 数据驱动视图
* 数据变化 dom 自动更新
## mvvm
* vm 监听 v 的事件去修改 m
* m 改变通过 vm 指令去更新 v
## vue 响应式
* Object.defineProperty
* 深度监听需要递归到底，一次性计算量大
* 新增删除属性无法监听
* 无法监听数字，需要重新定义原型，不能污染原来
## 虚拟 dom
* 用 js 模拟 dom 结构计算最小变更
* js 执行速度快
## diff 算法
* 同层比较，深度优先
* tag 和 key 相同为同一节点
* h vnode patch diff key
## 模板编译
* vue 模板编译器将模板编译为 render 函数
* 执行 render 函数生成 vnode 再 patch 和 diff
* 可用 render 代替 template
## 组件渲染更新过程
* 解析模板为 render 函数
* 触发响应式，监听 get set
* 执行 render 生成 vnode 再 patch diff
* 更新触发 set 重新执行 render patch
## 异步渲染
* 汇总 data 修改一次更新
* 减少 dom 操作提高性能
# vue3 响应式
* proxy
* 可监听新增删除属性，数组变化
* reflect 工具函数，代替 object
* get 时监听 