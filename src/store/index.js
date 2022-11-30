import { createStore } from 'vuex'
import axios from 'axios';
import Swal from 'sweetalert2';
import task from './modules/task';
import product from './modules/product';

const store = createStore({
  modules:{
    task,
    product,
  }
})

export default store;
