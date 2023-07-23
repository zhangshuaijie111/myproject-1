// 服务相关依赖
const express = require('express');
const cors = require('cors');

// 工具函数相关依赖
const join = require('path').join;
const { getModules } = require('./utils.js');
const Mock = require('mockjs');

// 拿到 模拟接口路径 & 其模拟函数
const dirPath = join(__dirname, './api');
const apis = getModules(dirPath);

// 初始化 web 服务实例
const app = express();
app.use(express.json());
app.use(cors());

// 将模拟函数挂在路由上
const METHODS = ['get', 'post', 'delete'];
const PREFIX = '/api/';
apis.forEach(({
    path,  // 根据文件路径生成的接口路径 一般是 apis/ 后面的东西
    module // 响应处理函数对象，上面有 get 方法和 post 方法
}) => {
    const router = express.Router();
    METHODS.forEach((method) => {
        if (!module[method]) return;
        // 加一层 routerHandler 可以对参数进行预处理
        const routeHandler = function (req, res, next) {
            // post 请求打印参数
            if(method === 'post' && JSON.stringify(req.body) !== '{}') {
                console.log(path, method, req.body);
            }

            module[method](
                req,
                res,
                Mock.mock,
                (err) => {
                    res.send(
                        { "errno": 1, "errmsg": err.message }
                    )
                }
            );
        }
        let relPath = path;
        if (module.params) {
            module.params.forEach((param, index) => {
                relPath += `${index === 0 ? '' : '/'}:${param}`;
            });
        }

        router[method](relPath, routeHandler);
    })
    app.use(PREFIX, router);
})

module.exports = app;