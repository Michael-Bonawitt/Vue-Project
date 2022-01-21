import Vue from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Announcement from './components/Announcement.vue'
import Article from './components/Article.vue'

Vue.use(bootstrap);

Vue.component('announcement', Announcement);
Vue.component('app-article', Article);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
