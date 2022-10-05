# 1. node 进程如何通信
- 进程是资源分配的最小单位
- 线程是运算调度的最小单位
- `webworker` 开启进程
- `child_process` `fork` 开启 `send` 传消息
- `cluster` 可开启多个进程

