# 1. 前端为何进行打包构建
- 体积更小 加载更快
- 编译高级语言和语法
- 保证兼容性和错误提示
- 打造统一高效的开发环境
- 统一的构建流程和产出标准
- 集成公司构建规范

# 2. `module` `chunk` `bundle` 区别
- `module` 各个源码文件
- `chunk` 多模块合并的文件
- `bundle` 最终输出文件

# 3. `loader` 和 `plugin` 区别
- `loader` 模块转换
- `plugin` 功能扩展

# 4. `babel` 和 `plugin` 区别
- `babel` 是语法编译工具
- `webpack` 是打包构建工具

# 5. 如何产出 `lib`
- `webpack.dll.js`

# 6. `babel-polyfill` 和 babel-rentime 区别
- `babel-polyfill` 污染全局
- `babel-rentime` 不会污染全局

# 7. `webapck` 如何实现懒加载
- `import()`

# 8. 为何 `proxy` 不能被 `poly-fill`
- `proxy` 功能不能用 `defineproperty` 模拟

# 9. `webapck` 优化构建速度
- 生产环境
- `babel-loader` 开启缓存
- `ignorePlugin` 忽略第三方包指定目录
- `happyPack` 多进程打包
- `noParse` 不去解析属性值代表的库的依赖
- `ParallelUglifyPlugin` 多进程压缩
- `UglifyJS` 压缩代码
- 开发环境
- 自动刷新
- 热更新
- `DLLPlugin` 同版本只构建一次

# 9. `webapck` 优化产出代码
- 小图片 `base64` 编码
- `bundle` 加 `hash`
- 懒加载
- 提取公共代码
- `cdn`
- `ignorePlugin`
- 使用 `production`
- `scope hosting` 减少函数作用域



# 10. 