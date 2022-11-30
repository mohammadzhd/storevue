<template>
  <div class="container">
    <div class="row mt-5 mb-5">

        <div v-if="!Cart.length" class="text-center">
            <h3>Cart is empty! <i class="bi bi-emoji-frown text-light"></i></h3>
            <i class="bi bi-cart-x text-light" style="font-size:60px;"></i><br>
            <router-link class="btn btn-outline-light" to="/products">Products</router-link>
        </div>

      <div v-if="Cart.length" class="col-lg-12 holderTable">
        <table class="table table-hover border bg-white mb-0">
          <thead>
            <tr>
              <th>Product</th>
              <th class="text-center">Price</th>
              <th class="text-center" style="width: 10%">Quantity</th>
              <th class="text-center">Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in Cart" :key="item.id">
              <td class="align-middle">
                <div class="row">
                  <div class="col-lg-2">
                    <img :src="item.image" alt="..." class="img-fluid" />
                  </div>
                  <div class="col-lg-10">
                    <h5>{{item.name}}</h5>
                    <p>{{item.description}}</p>
                  </div>
                </div>
              </td>
              <td class="align-middle text-center">{{item.price}}$</td>
              <td class="align-middle text-center plusMinuss">
                <button  @click="Plus(item.id)">+</button>
                <span>{{item.quantity}}</span>
                <button v-if="getQuantity(item.id)>1"  @click="Minuss(item.id)">-</button>
                <button v-if="getQuantity(item.id)==1" @click="remove(item.id)"><i class="bi bi-trash-fill"></i></button>
              </td>
              <td class="align-middle text-center">{{item.quantity * item.price}}<span class="text-danger">$</span></td>
              <td class="align-middle" style="width: 15%">
                <button class="btn btn-danger btn-sm" @click="remove(item.id)">delete</button>
              </td>
            </tr>

          </tbody>
          <tfoot>
            <tr>
              <td>
                <button @click="ClearAll()" class="btn btn-dark">Clear Cart</button>
              </td>
              <td colspan="2" class="hidden-xs mx-auto"></td>
              <td class="hidden-xs text-center" style="width: 15%">
                <strong class="text-dark">Total: {{total()}}$</strong>
              </td>
              <td>
                <button class="btn btn-success btn-block">Checkout</button>
              </td>
            </tr>
          </tfoot>
        </table>
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

    const Cart = computed(()=> store.state['product'].Cart)

    function total(){
      return  store.state['product'].Cart.reduce((total, product) => total + product.price * product.quantity , 0)
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
    function ClearAll(){
      store.dispatch('product/ClearAll')
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

    return{Cart ,getQuantity ,Plus,Minuss,remove ,total,ClearAll}

    },
}
</script>


<style scoped>

    h5,p,td,span,th{
        color: black;
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
        padding: 0 8px;
    }

    .plusMinuss i{
        font-size: 18px;
    }
    .holderTable{
        border-radius: 10px;
        padding: 0 0;
        overflow: hidden;
    }

</style>