import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.prototype.axios=axios

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    Puntaje_1:0,
    Puntaje_2:0
  },
  mutations:{
    CambiarPuntaje1(state,nvoPuntaje){
      state.Puntaje_1=nvoPuntaje
    },
    CambiarPuntaje2(state,nvoPuntaje){
      state.Puntaje_2=nvoPuntaje
    }
  }
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

