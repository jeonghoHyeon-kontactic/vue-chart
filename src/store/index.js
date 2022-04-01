import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import analysis from './analysis'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    analysis
  },
  plugins: [
    createPersistedState({
      paths: ['analysis']
    })
  ]
})
