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

# 并行同步作业
## 多进程处理
- HappyPack： 多进程方式加载Loader，停止更新。
- Thread-loader： 多进程资源加载，官方方案
- Parallel-Webpack: 多进程方式运行Webpack构建实例
- 支持多进程的Loader和Plugin：比如：TerserWebpackPlugin的多进程模式

# 高效作业 - ESBuild编译器
- 由于JS不适合计算密集型作业。所以这部分最好能够找到更高效的执行环境。目前比较成熟的方案是使用高效编译器
- 使用ESBuild 或SWC 负责 Typescript 的编译
- 使用ESBuild 或 SWC 复杂压缩丑化

