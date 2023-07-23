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
import Homepage from '../views/Homepage.vue'
import PublishHome from '../views/PublishHome.vue'
import Notemanagement from '../views/Notemanagement.vue'
import Publishmain from '../views/Publishmain.vue'
import Notedata from '../views/Notedata.vue'
import Fandata from '../views/Fandata.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
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
            {
                path: 'publish',
                component: Publish,
                children: [
                    {
                        path: '',
                        alais: 'publishmain',
                        name: 'publishmain',
                        component: Publishmain,
                    },
                    {
                        path: 'notemanagement',
                        name: 'notemanagement',
                        component: Notemanagement
                    },
                    {
                        path: 'publishHome',
                        name: 'publishHome',
                        component: PublishHome
                    },
                    {
                        path:'notedata',
                        name:'notedata',
                        component:Notedata
                    },
                    {
                        path:'fandata',
                        name:'fandata',
                        component:Fandata
                    }
                ]
            },
            { path: 'notice', component: Notice },
            { path: 'individual', component: Individual },
            { path: 'noticelist', component: Noticelist },
            { path: 'homepage', component: Homepage },
        ]
    },
    {
        path:'/login',
        name:'login',
        component: Login
    },
    {
        path:'/register',
        name:'register',
        component: Register
    }
]
//解决报错
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