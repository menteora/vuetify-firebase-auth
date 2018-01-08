import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/user'
import common from '@/store/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: user,
    common: common
  },

  state: {
    world: 'world'
  },

  actions: {},

  mutations: {},

  getters: {}
})
