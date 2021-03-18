import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAzureMaps from 'vue-azure-maps'
import '@/assets/css/styles.css'
import 'leaflet/dist/leaflet.css';


Vue.config.productionTip = false

Vue.use(VueAzureMaps, {
  key: 'IBNlBlT1H4Afw7VnG7E2iz9gXAAkWuj_4xZK2kF_b-E',
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
