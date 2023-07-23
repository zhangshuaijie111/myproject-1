const Mock = require("mockjs");
let data = Mock.mock({
    //6代表生成6组数据
    "data|6": [ 
        {
          
            "shopMsg": "@ctitle(10)", //生成商品信息，长度为10个汉字
            "shopName":"@cname", //生成名字
            "shopNumber":"@integer(1,1000)"//生成随机数字
        }
    ]
})
Mock.mock(/api\/table/,'post',()=>{
    return data
})