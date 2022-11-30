<template>
    <div class="container">
        <div class="text-end ">
          <router-link to="/cart" class="myBasket">
              <span class="badge rounded-pill bg-primary">{{this.$store.state['product'].Cart.length}}</span>
              <i class="bi bi-cart3 fs-3"></i>
          </router-link>
        </div>
        <div class="row col-12 mx-auto">
            <div v-for="item in products" :key="item.id" class="col-lg-3 col-md-4 col-sm-5 col-7 mx-auto g-2">
                <div class="mycontainer" >
                    <img class="cardImage img-fluid" :src="item.image" alt="product" />
                    <h3>{{item.name}}</h3>
                    <p>{{item.description}}</p>
                    <hr class="text-dark m-0">
                    <div class="linkmycontainer container p-2 ps-3 pe-3">

                        <button v-if="getQuantity(item.id)===0" @click="addtoCart(item)" class="btn btn-outline-success p-1">Add to Cart</button>

                        <div v-if="getQuantity(item.id)>=1" class="col-auto d-flex plusMinuss align-items-center">

                          <button v-if="getQuantity(item.id)>1" @click="Minuss(item.id)"><span >-</span></button>
                          <button v-if="getQuantity(item.id)==1" @click="remove(item.id)"><i class="bi bi-trash-fill"></i></button>
                          <span>{{getQuantity(item.id)}}</span>
                          <button @click="Plus(item.id)">+</button>
                        </div>

                        <p class="p-0 m-0">{{item.price}}$</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed} from 'vue';
import {useStore} from "vuex"
export default {
    setup(){
    const store = useStore();

    const products = computed(()=> store.state['product'].Products)
    

    function addtoCart(product){
      store.dispatch('product/addProduct', product)
      Plus(product.id)
    }
    function Plus(id){
      store.dispatch('product/Plus', id)
    }
    function Minuss(id){
      store.dispatch('product/Minuss', id)
    }
    function remove(id){
      store.dispatch('product/Remove', id)
    }

    function addOrPlus(id){
      const carts = store.state['product'].Cart;
      const avilProduct = carts.find(it => it.id === id)
      if(avilProduct){
        return true
      }
      else{
        return false
      }
    }

    function getQuantity(id){
      const carts = store.state['product'].Cart;
      const availProduct = carts.find(it => it.id === id)
      if(availProduct){
        return availProduct.quantity
      }
      else{
        return 0
      }
    }

    return{products , addtoCart , addOrPlus ,getQuantity ,Plus,Minuss,remove}
    },
}
</script>


<style scoped>
  .mycontainer {
    height: 100%;
    border: 1px solid silver;
    border-radius: 5px;
    overflow: hidden;
    background-color: #fff;
    margin: 0 10px 0px;
    transition: all 0.2s ease;
    text-align: center;
  }
  
  .mycontainer:hover {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px; 
  }
  .mycontainer:hover img{
    transform: scale(1.1);
  }
  
  .cardImage {
    transition: 0.3s all;
    padding: 10px;
  }
  
  .mycontainer h3 {
    color: #404040;
    text-align: left;
    margin: 25px 20px 15px;
    font-size: 1.1rem;
  }
  
  .mycontainer p {
    color: #404040;
    text-align: left;
    margin: 15px 20px;
    font-size: 0.9rem;
    font-weight: 500;
  }
  
  .linkmycontainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .linkmycontainer a {
    text-decoration: none;
    color: #1a73e8;
    font-size: 0.95rem;
  }


  .plusMinuss button{
    border: none;
    border-radius: 4px;
    background:#1a73e8;
    width: 28px;
    font-size: 20px;
    padding: 0px 0px;
  }
  .plusMinuss > span{
    color: #1a73e8;
    font-weight: 600;
    padding: 0 5px;
  }

  .plusMinuss i{
    font-size: 18px;
  }
  
  .myBasket{
    position: relative;
  }
  .myBasket span{
    position: absolute;
    right: -10px;
    padding: 3px 6px;
  }

  /* @media (max-width: 1000px) {
    .mycontainer {
      width: 45%;
    }
  }
  
  @media (max-width: 768px) {
    .mycontainer {
      width: 45%;
    }
    .cardImage {
      width: 200px;
    }
  }
  
  @media (max-width: 555px) {
    .mycontainer {
      width: 70%;
    }
    .cardImage {
      width: 230px;
    }
  }
  
  @media (max-width: 400px) {
    .mycontainer {
      width: 90%;
    }
  } */
</style>

