import Vue from 'vue';
import store from './store';

import App from './App.vue';

/** vuex */

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
