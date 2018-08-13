import Vue from 'vue'
import App from './App'
import i18n from './i18n'
import store from './store'
import router from './router'
import axios from './axios/index'
import ElementUI from 'element-ui';

Vue.use(ElementUI);


//引入ES6转码
import 'babel-polyfill'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  store,router,i18n,
  template: '<App/>',
  components: { App }
})
