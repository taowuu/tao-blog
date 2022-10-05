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