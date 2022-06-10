import axios from "axios";
const categorymod = {
  state: () => ({
    category: [], // {slug: ''}
    products: [],
    // changeCategory: [],
    uri: 'http://localhost:3000'
  }),
  getters: {
    getUri(state){
      return state.uri
    },
    getCategories(state){
      return state.category
    },
    getProducts(state){
      return state.products
    },
    // getChange(state){
    //   state.changeCategory
    // }
  },
  mutations: {
    allCategory (state, payload){
      state.category = payload
    },
    catProducts(state, payload){
      state.products = payload
    },
    // pushProducts(state, payload){
    //   state.product.push(payload)
    // }, // Для дальнейшей работы с добавлениями товаров при скроле 
  },
  actions: {
    allCategories(context){
      axios.get(`${context.state.uri}/api/all`)
      .then(res =>{
        if(res.status === 200){
          // console.log(res.data);
          context.commit('allCategory', res.data)
        }
      })
    },
    catProducts(context, payload){
      axios.get(`${context.state.uri}/api/${payload}`)
      .then(res =>{
        if(res.status === 200){
          // console.log(res.data)
          context.commit('catProducts', res.data)
        }
      })
    },
    subProducts(context, payload){
      axios.get(`${context.state.uri}/api/getSub`, {
        params: {sub: payload} // ГОВНОКОД
      })
      .then(res => {
        if(res.status === 200){
          // console.log(res.data);
          context.commit('catProducts', res.data)
        }
      })
    },
    // changeProductCats(context, payload){
    //   axios.get(`${context.state.uri}/api/${payload}`)
    //   .then(res =>{
    //     if(res.status === 200){
    //       // console.log(res.data)
    //       context.commit('catChange', res.data)
    //     }
    //   })
    // }
  }
}


export default categorymod