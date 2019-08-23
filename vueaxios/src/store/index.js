import Vue from 'vue'
import Vuex from 'vuex'
import UserProvider from '@/resources/user_provider'
const userService = new UserProvider()

Vue.use(Vuex)

const modules = {
}

const state = {
  user: {}
}

const actions = {
  async getUser ({commit}) {
    const data = await userService.getUser()
    commit('SET_USER', data)
  }
}

const mutations = {
  SET_USER (state, data) {
    state.user = data
  }
}

export default new Vuex.Store({
  modules,
  state,
  actions,
  mutations
})