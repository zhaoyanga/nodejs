const http = require("http");
//客户端去请求的服务器地址
const url = "http://192.168.20.34:3330"

//创建一个客户端
//request方法可以创建一个客户端，两个参数：请求的地址、请求的回调函数，回调函数中的形参是req响应
const req = http.request(url, (req) => {
    console.log(req)
    console.log(req.statusCode);
    let str = "";
    req.on("data",(chunk) => {
        str += chunk.toString();
        console.log(str);
    })
})

//发送请求
req.end();