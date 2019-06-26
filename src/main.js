import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import StringIt from './plugins/StringIt'
import './registerServiceWorker'

Vue.use(StringIt)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
