import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.scss'
import fastclick from 'fastclick'

// Axios.defaults.baseURL = '/api'
// Axios.defaults.headers.post['Content-Type'] = 'application/json'

fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
