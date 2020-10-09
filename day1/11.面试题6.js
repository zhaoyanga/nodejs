//1 2 9 4 10 13 3 15 16 5 6 8 7 
console.log(1); //同步
new Promise(function (resolve) {
    resolve();
    console.log(2); // 同步
    setTimeout(function () {
        console.log(3); // 宏任务
    }, 0);
    Promise.resolve().then(function () {
        console.log(4); // 微任务
        setTimeout(function () {
            console.log(5); //宏任务
        }, 0);
        setTimeout(function () {
            (async function () {
                console.log(6); //微任务
                return function () {
                    console.log(7); //宏任务
                };
            })().then(function (fn) {
                console.log(8); //微任务
                fn();
            });
        }, 0);
    });
    new Promise(function (resolve) {
        console.log(9); // 同步
        resolve();
    }).then(function () {
        new Promise(function (resolve, reject) {
            console.log(10); // 微任务
            reject();
        }).then(function () {
            setTimeout(function () {
                console.log(11);
            }, 0);
            console.log(12);
        }).catch(function () {
            console.log(13); //微任务
        });
    });
});
setTimeout(function () {
    console.log(15); //宏任务
    Promise.resolve().then(function () {
        console.log(16); //微任务
    });
}, 0);