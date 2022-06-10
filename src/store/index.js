// import Vue from 'vue'
import {createStore} from 'vuex'
import categorymod from './modules/category'
import subcategorymod from './modules/subcategory'


// Vue.use(Vuex)

export default createStore({
  state: {
    BASIC_URL: 'http://localhost:3000'
  },
  getters:{
    getBasic(state){
      return state.BASIC_URL
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    categorymod,
    subcategorymod,
  }
})


