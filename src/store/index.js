import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import analysis from '@/store/analysis'
import login from '@/store/login'
import client from '@/store/client'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    analysis,
    login,
    client
  },
  plugins: [
    createPersistedState({
      paths: ['analysis','login']
    })
  ]
})
