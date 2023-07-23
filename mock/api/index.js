/**
 * 暴露主页
 */

module.exports = {
    get(req, res, mock) {
        res.send(mock({
            name: '@ctitle(1, 5)'
        }));
    }
}