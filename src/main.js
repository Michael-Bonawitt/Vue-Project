import Vue from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Announcement from './Announcement.vue'

Vue.use(bootstrap);

Vue.component('announcement', Announcement);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
