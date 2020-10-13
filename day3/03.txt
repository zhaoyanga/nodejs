const fs = require("fs");
const path = require("path");

//拼接路径
const readFilePath = "D:\\上课\\新的征途——node.js\\day3\\04.流式快速读写.js";
const writeFilePath = path.resolve(__dirname,"./03.txt");
//创建一个可读流
const rs = fs.createReadStream(readFilePath);
//创建一个可写流
const ws = fs.createWriteStream(writeFilePath)

//pipe方法就是管道 可以直接把可读流通过管道写入可写流
rs.pipe(ws);