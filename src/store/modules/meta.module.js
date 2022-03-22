const state = {
  title: null,
  description: null
}

const mutations = {
  SET_TITLE (state, value) {
    state.title = value
  },
  SET_DESCRIPTION (state, value) {
    state.description = value
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
