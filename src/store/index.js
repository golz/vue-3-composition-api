import { createStore } from 'vuex'
import {
  getUser,
  login
} from '@/api/common'

const state = () => ({
  user: {}
})

const mutations = {
  setUser (state, value) {
    state.user = {...value}
  }
}

const actions = {
  getUser ({ commit }, { success, fail } = {}) {
    getUser((response) => {
      commit('setUser', response.data.data)
      success && success(response)
    }, fail)
  },
  login ({ commit }, { success, fail, data } = {}) {
    login((response) => {
      commit('setUser', response.data.data)
      success && success(response)
    }, fail, data)
  }
}

const getters = {
  user (state) {
    return state.user || {}
  },
  userName (state) {
    return state.user?.name
  }
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})
