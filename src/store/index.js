import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tab
  },
  plugins: [createPersistedState()]
})