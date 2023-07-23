/**
 * 用户注册
 */

module.exports = {
    post(req, res, mock) {
        res.send(mock({
            name: '@ctitle(1, 5)'
        }));
    }
}