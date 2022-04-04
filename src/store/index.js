import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import analysis from './analysis'
import login from './login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    analysis,
    login
  },
  plugins: [
    createPersistedState({
      paths: ['analysis','login']
    })
  ]
})
