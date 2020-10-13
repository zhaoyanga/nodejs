const fs = require("fs");
const path = require("path");

//拼接路径
const filePath = "D:\\上课\\新的征途——node.js\\day3\\02.流式读取.js"

//创建一个可写流
const rs = fs.createReadStream(filePath);

//rs的data事件就是用来消费可读流的 每次读取的事件
//chunk就是每次读取的64kb的数据
rs.on("data",(chunk) => {
    console.log(chunk.length)
    console.log(chunk.toString())
})

//end事件是读取完毕以后会自动关闭时触发
rs.on("end",() => {
    console.log("关闭了")
})