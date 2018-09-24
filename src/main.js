import Vue from 'vue'
import App from './App.vue'
import router from './router'

// fontawesom import and init
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


// initialize leanCloud
var AV = require('leancloud-storage');
var { Query, User } = AV;

var APP_ID = 'PSVQ4FEQDgmg4el2PBq9dI8p-gzGzoHsz';
var APP_KEY = 'MUo7Na7ofphTV60DQF51tr27';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
