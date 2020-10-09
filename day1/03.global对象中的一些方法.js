// console.log(global);
setTimeout(() => {
    console.log("timeout")
},1000)

//setImmediate:立刻执行函数，异步代码，当同时代码执行完成后会立刻调用/
setImmediate(() => {
    console.log("1")
})