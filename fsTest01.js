const fs = require('fs');   //调用nodejs的fs模块
    fs.readFile('./111.txt',"utf-8",function(err,data){    //读取文件
        if (err) {          //err如果为!null，即有保错信息
            return console.log("读取文件失败"); 
        } else {            //反之则读取到了文件
            arrr1 = data.split(' ');        //将读取到的文件以空格形式切割
            const arrr2 = [];               //新建一个空数组
            for(var i =0;i<arrr1.length;i++){           //循环切割后的数组
                arrr2.push(arrr1[i].replace("=",":"));     
                //将每个切割后的字符串的=改为:，填入空数组中。此处注意：处理后的数据必须填入新数组
            }
           const newstr =  arrr2.join("\n");
           //将替换好的数组每条数据添加换行
            fs.writeFile('./111.txt',newstr,function(err){
                //调用写入，写入数据是处理好的数组。
                if(err){
                    console.log("替换文件目标失败，请检查替换文件路径")
                }else{
                    console.log("替换成功!")
                }
            });
        }
    });
