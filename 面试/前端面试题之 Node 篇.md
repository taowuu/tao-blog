# 前端面试题之 Node 篇

## Node 进程通信
- 进程是资源分配的最小单位
- 线程是运算调度的最小单位
- `child_process.fork()` 父进程衍生新的子进程建立 IPC
- `subprocess.send()` 向子进程发送消息
- cluster 可开启多个进程

## 