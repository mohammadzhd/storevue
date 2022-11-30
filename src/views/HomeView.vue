<template>
  <div class="home container text-center">
    <h5 class="h5">This is my "Vuejs" project. I hope you enjoy it <i class="bi bi-emoji-sunglasses-fill text-light"></i></h5>
    <img class="mt-5" :src="image" alt="melogo" width="200">
  </div>
</template>

<script>
import image from "../assets/melogo.png"
export default {
  name: 'HomeView',
  setup(){
    return{image}
  }

}
</script>

<style scoped>
.h5{
  font-family: monospace;
}
</style>
