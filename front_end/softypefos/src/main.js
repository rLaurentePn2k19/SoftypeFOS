import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2'
import store from './store'
import bus from './bus'
import axios from 'axios'

Vue.use(VueSweetalert2);
Vue.config.productionTip = false
Vue.prototype.$bus = bus
Vue.prototype.$axios = axios

new Vue({
  vuetify,
  router,
  store,

  render: h => h(App),
  template: '<router-view></router-view>',
}).$mount('#app')

