import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  lang: localStorage.getItem('lang') || 'en',
  message: {
    visible: false,
    duration: 2,
    msg: 'hello message!'
  },
}

const mutations = {
  CHANGE_LANG (state, lang) {
    state.lang = lang
    localStorage.setItem('lang', lang)
  },
  CHANGE_MSG (state, {visible, duration, msg}) {
    state.message.visible = visible
    state.message.duration = duration
    state.message.msg = msg
    state.message.timer = null
  },
}

export default new Vuex.Store({
  state,
  mutations,
})