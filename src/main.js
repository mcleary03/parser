import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Utils from './plugins/Utils'
import './registerServiceWorker'

Vue.use(Utils)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
