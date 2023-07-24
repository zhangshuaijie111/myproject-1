/**
 * 用户注册
 */

module.exports = {
    post(req, res, mock) {
        res.send(mock({
            status: 0,
            msg: '注册成功',
        }));
    },
    get(req, res, mock) {
        res.send(mock({
            status: 0,
            msg: '注册成功',
        }));
    }
}