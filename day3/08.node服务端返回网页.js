const http = require("http");
const fs = require("fs");
const path = require("path");
const { RSA_NO_PADDING } = require("constants");



//创建一个服务
//createServer的回调函数的形参分别是request和response，代表请求和响应
const server = http.createServer((request,response) => {

    const filePath = path.resolve(__dirname,"./zfx/10.正方形动画.html");
    const rs = fs.createReadStream(filePath);

    //在返回响应之前，需要设置响应头中的数据格式
    response.setHeader("Content-Type","text/html;charset=utf-8");
    //返回响应
    rs.pipe(response);

})

//启动服务 使用listen方法，三个参数：端口号，主机地址/域名地址，回调函数
//本机的主机地址：localhost/127.0.0.1 或者是局域网地址 或者是服务器地址
const port = 3330;
const host = "192.168.20.34";
server.listen(port,host,(err) => {
    if (err) {
        console.log("服务器启动失败:" + err);
        return;
    }
    console.log(`服务器启动成功:请访问 http://${host}:${port}`)
})