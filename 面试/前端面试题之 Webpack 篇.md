# 前端面试题之 Webpack 篇

## 打包构建
- 体积更小 加载更快
- 编译高级语言和语法
- 保证兼容性和错误提示
- 打造统一高效的开发环境
- 统一的构建流程和产出标准
- 集成公司构建规范

## module / chunk / bundle
- module 各个源码文件
- chunk 多模块合并的文件
- bundle 最终输出文件

## loader / plugin
- loader
    - 运行在打包文件之前
    - 文件加载器并进行 编译 压缩 等
- plugin
    - 在整个编译周期都起作用
    - 功能扩展
    - 打包优化 资源管理 环境变量注入等

## babel / plugin
- babel 是语法编译工具
- webpack 是打包构建工具

## babel-polyfill / babel-rentime
- babel-polyfill 新语法垫片 会污染全局
- babel-rentime 不会污染全局

## 为何 proxy 不能被 polyfill
- proxy 不能用 defineproperty 模拟

## 优化构建速度
- 生产环境
    - babel-loader 开启缓存
    - ignorePlugin 忽略第三方包指定目录
    - happyPack 多进程打包
    - noParse 不去解析属性值代表的库的依赖
    - ParallelUglifyPlugin 多进程压缩
    - UglifyJS 压缩代码
- 开发环境
    - 自动刷新
    - 热更新
    - DLLPlugin 同版本只构建一次

## 优化产出代码
- 小图片 base64
- bundle-hash
- 懒加载
- 提取公共代码
- CDN
- ignorePlugin
- production
- Scope Hoisting 减少函数作用域

## 