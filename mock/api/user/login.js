/**
 * 用户登录
 */

module.exports = {
    post(req, res, mock) {
        res.send(mock({
            status: 0,
            msg: '登陆成功',
            data: {
                token: '@string(symbol, 3)@string(number, 3)@string(low, 3)@string(upper, 3)'
            }
        }));
    },
    get(req, res, mock) {
        res.send(mock({
            status: 0,
            msg: '登陆成功',
            data: {
                token: '@string(symbol, 6)@string(number, 6)@string(low, 6)@string(upper, 6)'
            }
        }));
    }
}