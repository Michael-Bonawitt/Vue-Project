import Vue from 'vue'
import App from './App.vue'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Announcement from './components/Announcement.vue'
import Article from './components/Article.vue'
import Contact from './components/Contact.vue'

Vue.use(Bootstrap);

export const eventBus = new Vue();

Vue.component('announcement', Announcement);
Vue.component('app-article', Article);
Vue.component('app-contact', Contact);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
