import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import analysis from '@/store/analysis'
import login from '@/store/login'
import client from '@/store/client'
import reports from '@/store/reports'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    analysis,
    login,
    client,
    reports
  },
  plugins: [
    createPersistedState({
      paths: ['analysis','login']
    })
  ]
})
