/**
 * 用户登录
 */

module.exports = {
    post(req, res, mock) {
        res.send(mock({
            msg: '登陆成功'
        }));
    }
}