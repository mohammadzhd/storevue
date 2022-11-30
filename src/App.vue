<template>
  <div>
    <Navbar />
    <router-view class="mt-4"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
components:{Navbar}
}
</script>

<style>
body{
  background: #2c3e50 !important;
}
*{
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: black;
}
nav a:hover{
  color: #5adea358;
  transition: 0.4s;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
