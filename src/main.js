import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './router/index.js'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


