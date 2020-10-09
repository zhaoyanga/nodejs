// 4 1 3 6 8 9 2 7 9 5ff
async function async1() {
    console.log('1');
    await async2(); // 
    console.log('2')
    process.nextTick(() => {
        console.log(10)
    })

}

async function async2() {
    console.log('3')
}

console.log('4');
setTimeout(() => {
    console.log('5')
}, 0);

async1();

new Promise((resolve) => {
    console.log('6');
    resolve()
}).then(() => {
    console.log('7')
});
console.log('8')
process.nextTick(() => {
    console.log(9)
})