Promise.prototype.all = function(promises) {
    let results = [];
    let promiseCount = 0;
    let promisesLength = promises.length;
    return new Promise(function(resolve, reject) {
        for (let val of promises) {
            Promise.resolve(val).then(function(res) {
            results[promiseCount++] = res;
            // 当所有函数都正确执行了，resolve输出所有返回结果。
            if (promiseCount === promisesLength) {
                return resolve(results);
            }
            }, function(err) {
                return reject(err);
            });
        }
    });
};

Promise.prototype.race = function(promises) {
    return new Promise(function(resolve, reject) {
        for (let val of promises) {
            const current = val
            current.then(resolve, reject)
        }
    })
}

Promise.prototype.finally = function (cb) {
    return this.then((data) => {
      // 如果 callback 里面是一个Promise，那么需要等着他的结果
      // Promise.resolve 目的是等待cb()后的Promise执行完成
      return Promise.resolve(cb()).then(() => data);
    }, (err) => {
      return Promise.resolve(cb()).then(() => { throw err });
    })
}
