# vue 的基本使用
## 插值表达式
* 只能是 js 表达式
## 动态属性
## v-html
* 有 xss 风险，会覆盖子组件
## computed
* 有缓存
## watch
* 引用类型拿不到 old value
* 因为指向同一个值
## class 和 style
* 使用驼峰写法
## v-if
* 真实渲染销毁
## v-show
* display none 隐藏
## v-for
* key 需要唯一
* 不能和 v-if 使用（优先级高于 if
## 事件
* event 是原生的
* 事件会挂载到当前元素
## 事件修饰符
* 设置阻止冒泡等功能
## v-model
* 修饰符设置防抖等功能
* 用于输入框