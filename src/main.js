import Vue from 'vue'
import Vuex from 'vuex'
import preview from './components/mpPreview.vue'
import form from './components/mpForm.vue'
// import store from './store/index'
import vueCustomElement from 'vue-custom-element'
Vue.use(Vuex)
const store = new Vuex.Store({
  state () {
    return {
      title: 'BT Sport | Nyheder, analyser og resultater fra sportens verden',
      description: 'B.T. Sport - Danmarks sportsavis! Få seneste nyt om fodbold, håndbold, cykling, tennis og andre sportgrene med live, resultater fra kampe og løb på bt.dk.',
      url: 'https://www.bt.dk/sport',
      maxChars: {
        title: null,
        description: null
      }
    }
  },
  mutations: {
    SET_MAX_CHARS (state, value) {
      state.maxChars.title = value.title
      state.maxChars.description = value.description
    },
    SET_TITLE (state, value) {
      state.title = value
    },
    SET_DESCRIPTION (state, value) {
      state.description = value
    },
    SET_URL (state, value) {
      state.url = value
    }
  }
})

Vue.use(vueCustomElement)
Vue.config.productionTip = false

preview.store = store
form.store = store

Vue.customElement('google-meta-preview', preview, {
  shadow: true,
  beforeCreateVueInstance(root) {
    const rootNode = root.el.getRootNode();

    if (rootNode instanceof ShadowRoot) {
      root.shadowRoot = rootNode;
    } else {
      root.shadowRoot = document.head;
    }
    return root;
  },
})
Vue.customElement('google-meta-form', form, {
  shadow: true,
  beforeCreateVueInstance(root) {
    const rootNode = root.el.getRootNode();

    if (rootNode instanceof ShadowRoot) {
      root.shadowRoot = rootNode;
    } else {
      root.shadowRoot = document.head;
    }
    return root;
  },
})