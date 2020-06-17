import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
uid:localStorage.getItem('uid')
  },
  mutations: {
    increment(state,number)
    {
      state.uid=number
      localStorage.setItem('uid',number)
  
    }
  },
  actions: {

  }
})
