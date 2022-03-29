import Vue from 'vue'
import Vuex from 'vuex'
import analysis from './analysis'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    analysis
  }
})
