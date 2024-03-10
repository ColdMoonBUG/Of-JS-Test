<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JS---GET请求</title>
    <script>
        window.onload = function () {
            var proxy = 'https://cors-anywhere.herokuapp.com/';     //定义代理服务器来绕过CORS
             var url = 'https://api.vvhan.com/api/acgimg';          //定义api地址
            //1、创建ajax对象
            var xhr = null;
            xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            // open请求的方式，地址，是否异步，true是异步，false是同步
            xhr.open("get", proxy+url, true);
            // 设置请求完成的回调函数
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // 在请求成功时处理响应

                        const imgblob = xhr.response;           //存储get到的blob对象
                        const url = window.URL.createObjectURL(imgblob);   //创建一个临时链接，来指向该blob
                        const a = document.createElement('a');  //创建一个html中的a标签
                        a.style.display = 'none';               //使a标签不可见
                        a.href = url;                           //href指向临时链接
                        a.download = 'img1.jpg';                //设置下载的文件名
                        document.body.appendChild(a);           //向body中添加该a标签
                        a.click();                              //默认点击a标签
                        window.URL.revokeObjectURL(url);        //关闭临时链接
                        document.body.removeChild(a);           //删掉body中的a链接
                    }
                } else {
                    // 如果发生错误，记录状态
                    console.error("Request failed with status: " + xhr.status);
                }
            };
            //发送请求
            xhr.send();
        };
    </script>
</head>
<body>
</body>

</html>
