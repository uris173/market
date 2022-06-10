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
    // getSubProd(state){
    //   return state.subProduct
    // }
  },
  mutations: {
    allSubcategories(state, payload){
      state.subcategory = payload
    },
    // subProd(state, payload){
    //   state.subProduct = payload
    // }
  },
  actions: {
    async allSubcategory(context, payload){
      await axios.get(`${context.state.uri}/api/subcat/${payload}`)
      .then(res =>{
        if(res.status === 200){
          console.log(res.data);
          context.commit('allSubcategories', res.data)
        }
      })
    },
    // subProducts(context, payload){
    //   axios.get(`${context.state.uri}/api/getSub/`, {params: {
    //     sub: payload,
    //   }})
    //   .then(res => {
    //     if(res.status === 200){
    //       console.log(res.data);
    //       context.commit('subProd', res.data)
    //     }
    //   })
    // },
    // changeSucategory(context, payload){
    //   axios.get(`${context.state.uri}/api`, {params: {
    //     sub: payload
    //   }})
    //   .then(res => {
    //     if(res.status === 200){
    //       // console.log(res.data);
    //       context.commit('allSubProd', res.data)
    //     }
    //   })
    // }
  }
}

export default subcategorymod