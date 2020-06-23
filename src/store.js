import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
uid:localStorage.getItem('uid')
  },
  mutations: {
    increment(state,uid)
    {
      state.uid=uid
      localStorage.setItem('uid',uid)
  
    }
  },
  actions: {

  }
})
