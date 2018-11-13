// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import MintUI from 'mint-ui'
import '@/assets/css/base.less'
import 'mint-ui/lib/style.css'
import '@/assets/css/mine-mint-ui.less';
import App from './App.vue'
import axios from 'axios';

Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
