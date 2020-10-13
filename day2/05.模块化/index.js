//引入自定义模块，直接书写路径，可以省略后缀
const add = require("./add");
//引入nodejs自有模块
const fs = require("fs");
//引入第三方模块
// const $ = require("jquery");
// console.log($)


//内建模块
const os = require("os");
const mem = os.freemem() / os.totalmem() * 100;
console.log(`内存剩余空间${mem.toFixed(2)}%`);
