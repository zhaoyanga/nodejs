process.nextTick(() => {
    console.log(111);
});

const promise = new Promise(resolve => {
    console.log(222);
    resolve();
});

setTimeout(() => {
    console.log(333);
}, 1000);

promise.then(() => {
    console.log(444);
});

setImmediate(() => {
    console.log(666);
});

console.log(7777)