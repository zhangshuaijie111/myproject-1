import Vue from 'vue';
import VueRouter from 'vue-router';
//引入组件
import Main from '../views/Main.vue'
import Findlist from '../views/Findlist.vue'
import Publish from '../views/Publish.vue'
import Notice from '../views/Notice.vue'
import Home from '../views/Home.vue'
import Individual from '../views/Individual.vue'
import Noticelist from '../views/Noticelist.vue'
//使用Vue.use()来注册VueRouter插件
Vue.use(VueRouter);
//创建router实例，配置路由规则
const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/home',
        children: [
            //子路由
            { path: 'home', component: Home },
            { path: 'findlist', component: Findlist },
            { path: 'publish', component: Publish },
            { path: 'notice', component: Notice },
            {path:'individual',component: Individual},
            {path:'noticelist',component: Noticelist}
        ]
    }
]
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
//创建router实例
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router