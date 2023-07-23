/**
 * 暴露主页
 */

module.exports = {
    get(req, res, mock) {
        res.send(mock({
            "data|6": [ 
                {
                    "shopMsg": "@ctitle(10)", //生成商品信息，长度为10个汉字
                    "shopName":"@cname", //生成名字
                    "shopNumber":"@integer(1,1000)"//生成随机数字
                }
            ]
        }));
    }
}