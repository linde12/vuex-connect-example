import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'abc123'
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
