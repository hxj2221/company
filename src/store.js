import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid: sessionStorage.getItem('uid') || [],
    name: sessionStorage.getItem('name') || [],
  },
  mutations: {
    increment(state, uid) {
      state.uid = uid
      sessionStorage.setItem('uid', uid)
    },
    appname(state, name) {
      state.name = name
      sessionStorage.setItem('name', name)
    }
  },
  actions: {

  }
})