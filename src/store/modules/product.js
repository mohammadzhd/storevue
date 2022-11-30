import axios from 'axios';
import Swal from 'sweetalert2';

function updateLocalStorage(cart){
  localStorage.setItem("cart",JSON.stringify(cart))
}
const product = {
    namespaced: true,
    state: {
      Products: [
        {
            id: 1,
            name: "Samsung Galaxy S20",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            image:
                "https://dkstatics-public.digikala.com/digikala-products/2e16bad7f6ea176ae6502406d7342afe9982fbf7_1608030120.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
            price: 300,
        },

        {
            id: 2,
            name: "iPhone 12",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            image: "https://dkstatics-public.digikala.com/digikala-products/9f5d8f6583a7289a096a9180ac88708856f4bd8f_1607433653.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
            price: 500,
        },

        {
            id: 3,
            name: "Redmi Note 8",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            image:
                "https://dkstatics-public.digikala.com/digikala-products/113846203.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
            price: 600,
        },

        {
            id: 4,
            name: "Samsung Galaxy A71",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            image:
                "https://dkstatics-public.digikala.com/digikala-products/120415904.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
            price: 700,
        },
       ],

       Cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  
      },

    getters: {
    },
    mutations: {

      add(state,product){
        const item = state.Cart.find(it => it.id === product.id)
        state.Cart.push({...product,quantity:0})
        updateLocalStorage(state.Cart)
      },
      Plus(state,id){
        const item = state.Cart.find(it => it.id === id)
        item.quantity++
        updateLocalStorage(state.Cart)
      },
      Minuss(state,id){
        const item = state.Cart.find(it => it.id === id)
        item.quantity--
        updateLocalStorage(state.Cart)
      },
      Remove(state,id){
        state.Cart = state.Cart.filter(it => it.id !== id)
        updateLocalStorage(state.Cart)
      },
      Clear(state){
        state.Cart =[],
        updateLocalStorage(state.Cart)
      }
      
    },
    actions: {

     addProduct(store,product){
      store.commit('add',product)
     },
     Plus(store,id){
      store.commit('Plus',id)
     },
     Minuss(store,id){
      store.commit('Minuss',id)
     },
     Remove(store,id){
      store.commit('Remove',id)
     },
     ClearAll(store){
      store.commit('Clear')
     },
    
    }
}

export default product;