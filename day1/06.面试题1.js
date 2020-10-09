// 2 7 1 4 6 3
process.nextTick(() => {
    console.log(111); //微任务代码 放入微任务队列  优先
});

const promise = new Promise(resolve => {
    console.log(222); // 同步代码
    resolve();
});

setTimeout(() => {
    console.log(333); //宏任务代码 放入宏任务队列
}, 1000);

promise.then(() => {
    console.log(444); // 微任务代码
});

setImmediate(() => {
    console.log(666); //宏任务代码
});

console.log(7777) //同步代码