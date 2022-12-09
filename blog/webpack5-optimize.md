# Webpack5.0 优化指南
- 不重复作业： 缓存技术
- 并行同步作业： 并行处理、多线程、多进程
- 高效作业：使用高效编辑器SWC、ESBuild
- 精简作业：减少步骤、缩减范围

# 不重复作业
- 缓存文件解析结果
```js
// webpack.config.js
module.exports = {
    cache: {
       type: "filesystem",
    },
}
```

