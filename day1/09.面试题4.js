//1 4 12 13 8 5 2 6 3 9 
process.nextTick(() => {
    console.log(111);
}); //微任务 优先

setTimeout(() => {
    console.log(222); // 计时器 宏任务
}, 0);
setImmediate(() => {
    console.log(333); //立刻执行 宏任务
});

const promise = Promise.resolve();

promise
    .then(() => {
        console.log(444);  //微任务
        //在执行某个微任务的里边又设置了一个微任务，如果这个微任务是process.nextTick,则会把这个process.nextTick放入一个新的微任务队列中，等当前微任务队列执行完成之后，才回去执行这个新队列
        process.nextTick(() => {
            console.log(555); //又重新设置了一个 优先微任务 
        });
        Promise.resolve().then(() => {
            console.log("12 12 12"); //又重新设置了一个 优先微任务 
        });
        queueMicrotask(() => {
            console.log("13 13 13 "); //又重新设置了一个 优先微任务 
        });
        setTimeout(() => {
            console.log(666); //计时器 宏任务
        }, 0);
    })
    .catch(() => {
        console.log(777);
    })
    .then(() => {
        console.log(888); //then 微任务
        setImmediate(() => {
            console.log(999); //立刻执行 宏任务
        });
    })
    .catch(() => {
        console.log(101010);
    })