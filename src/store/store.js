import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = '上海'
try {
  defaultCity = localStorage.city
} catch (e) {}
const store = new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: {
    changeCity (ctx, s) {
      ctx.commit('changeCity', s)
    }
  },
  mutations: {
    changeCity (state, s) {
      localStorage.city = s
      state.city = s
    }
  },
  getters: {

  }
})
export default store
