# webapck 性能优化
## module
* 源码文件，一切皆模块
## chunk
* 多模块合并成的
* entry import splitChunk
## bundle
* 最终输出文件
## babel-loader 开启缓存
## happyPack 多进程打包
* js 单线程，开启多进程打包
## ParallelUglifyPlugin
* UglifyJS 
* 多进程压缩
## 自动刷新
* watch: true
* devserve 自动开启
* 全部刷新速度慢，状态丢失
## 热更新
* 新代码生效，不刷新
* HotModuleReplacementPlugin
* hot true
* 手动设置热更新范围
## 动态链接库
* DLLPlugin 打包
* 同版本只构建一次
* DLLReferencePlugin 使用
## mode: production
* 自动压缩代码
* vue 自动删掉调试代码
* tree shaking
## esm
* 编译时引入（可 tree shaking
## commonjs
* 执行时引入
## scope hosting
* ModuleConcatenationPlugin
* 多文件合并为一个函数
* 减小创建函数作用域
## babel-polyfill
* corejs + regenerator
* babel 只转换语法
* polyfill 兼容新语法
## babel-runtime
* polyfill 污染全局环境
