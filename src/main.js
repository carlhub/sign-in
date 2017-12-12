import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import VueRouter from 'vue-router'
import store from './store'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VeeValidate)
Vue.use(VueRouter)
import App from './components/App.vue'
import Home from './components/Home.vue'
import Counter from './components/Counter.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Admin from './components/Admin.vue'
import Visitor from './components/Visitor.vue'
import { Validator } from 'vee-validate';
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Visitor },
    { path: '/counter', component: Counter },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/admin', component: Admin}
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
    
})
