// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import qs from 'qs'
import './assets/style/reset.css'
import './assets/style/fontfamily/stylesheet.css'


Vue.prototype.$qs=qs
Vue.config.productionTip = false
Axios.defaults.withCredentials = true;
Vue.prototype.$axios=Axios
Vue.prototype.$hef='https://www.yumukeji.cn/project/lizhen/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
