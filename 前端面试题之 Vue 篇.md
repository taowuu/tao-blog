# 1. `computed` 和 `watch` 区别
- `computed` 用于产生新数据
- `watch` 用于监听现有数据
- `computed` 有缓存 `method` 没有

# 2. `vue` 组件通信方式
- `prop` `emit`
- `eventbus`
- `attrs`
- `parent`
- `refs` 引用子组件
- `provide` `inject`

# 3. `Vuex` 中 `action` 和 `mutation` 区别
- `mutation` 操作是原子性，同步的
- `action` 可包含多个 `mutation` 可异步

# 4. `Vue` 每个生命周期都做了什么
1. `before create`
    - 创建空白 `vue` 实例
    - `data method` 未初始化
2. `created`
    - 完成响应式绑定
    - `data method` 可调用
    - 未开始渲染模板
3. `before mount`
    - 编译模板, `render` 生成 `vdom`
    - 没有开始渲染 `dom`
4. `mounted`
    - 完成 `dom` 渲染
    - 组件创建完成
    - 进入运行阶段
5. `before` `update`
    - `data` 发生变化后
    - 准备更新 `dom`
6. `updated`
    - `data` 变化且 `dom` 更新完成
    - 修改 `data` 可能死循环
7. `before` `unmount`
    - 组件进入销毁阶段
    - 可解绑事件
8. `unmounted`
    - 组件销毁完成

# 5. `Vue` 什么时候操作 `dom`
- `mounted` 和 `updated` 都不能保证组件挂载完成
- 使用 `nextTick`

# 6. `ajax` 放在那个生命周期
- `mounted`

# 7. `vue3` `composition` `api` 生命周期区别
- `setup` 代替 `create`
- `hook` 形式 `onMounted()` 代替 `mounted`

# 8. `vue` `react` `diff` 区别
- `react` 仅右移动, 把原来右边挤到左边
- `vue2` 双端比较
- `vue3` 最长递增子序列作为整体

# 9. `vue` `for` 为何使用 `key`
- `diff` 会根据 `key` 判断元素是否删除
- 匹配了 `key` 可以只移动节点性能好
- 未匹配 `key` 则删除重新渲染, 性能差

# 10. vue 内存路由
- 可以在当前页面触发不同组件的渲染
- 路由不会变化

# 11. 你在使用 `Vue` 过程中遇到过哪些坑
- 内存泄漏全局变量未销毁
- vue2 响应式缺陷
- 路由切换滚到顶部
    - 缓存原页面数据和 `scrolltop`
- `mpa+app webview`

# 12. 如何统一监听 `Vue` 组件报错
- window.onerror
    - 识别不了 vue，可识别异步
- errorCapture
    - 监听下级
    - 返回 fasle 不会向上传播
- errorHanler
    - 监听所有组件
