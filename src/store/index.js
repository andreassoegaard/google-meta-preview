import Vue from 'vue'
import Vuex from 'vuex'
import Meta from './modules/meta.module.js'
Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      Meta
    }
  })
}

export default store
