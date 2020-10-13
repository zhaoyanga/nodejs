/* 
    GET请求报文：
        报文收首行：
            GET http://192.168.20.34:3330/ HTTP/1.1
                - GET：请求方式
                - http://192.168.20.34:3330/：请求的地址和端口号
                - HTTP/1.1：http协议的版本号

        报文头部：
            - 主机地址
            Host:192.168.20.34:3330

            - 保持长连接
            Connection:keep-alive

            - 缓存 （分为协商缓存和强制缓存）
            Cache-Control:max-age=0

            - 支持https
            Upgrade-Insecure-Requests: 1

            -用户代理
            User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36

            - 可以接受的内容类型
            Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/*;q=0.8,application/signed-exchange;v=b3;q=0.9

            - 可以接受的压缩格式
            Accept-Encoding: gzip, deflate

            - 可以接受的语言
            Accept-Language: zh-CN,zh;q=0.9

        请求空行：

        请求体：
            只要是get请求，则请求体没有数据，请求的数据全部拼接在地址上







*/