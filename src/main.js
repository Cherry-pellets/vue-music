import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.scss'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: 'src/assets/images/loading.png'
})
fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
