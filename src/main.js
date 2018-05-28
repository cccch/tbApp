import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './assets/js/routerConfig/routerConfig.js'
import MintUI from 'mint-ui'
import store from './assets/store/store.js'
import 'mint-ui/lib/style.css'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUI)
let router = new VueRouter({
      routes:routes
    })
new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store:store

})
