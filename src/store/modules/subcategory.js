import axios from "axios";
const subcategorymod = {
  state: () => ({
    subcategory: [],
    subProduct: [],
    uri: 'http://localhost:3000'
  }),
  getters: {
    getSubcategory(state){
      return state.subcategory
    },
  },
  mutations: {
    allSubcategories(state, payload){
      state.subcategory = payload
    },
  },
  actions: {
    allSubcategory(context, payload){
      axios.get(`${context.state.uri}/api/subcat/${payload}`)
      .then(res =>{
        if(res.status === 200){
          console.log(res.data);
          if(res.data.length == 0){
            console.log(res.data)
          }
          else{
            context.commit('allSubcategories', res.data)
          }
        }
      })
    },
  }
}

export default subcategorymod