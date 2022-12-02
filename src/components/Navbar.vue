<template>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
        <a class="navbar-brand" href="#">mohammadzhd</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
             <li class="nav-item">
              <router-link to="/tasks">Tasks</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products">Products</router-link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
</template>

<style scoped>

  ul{
    margin-left: auto;
  }
  li{
    width: 100%;
    border-bottom: 1px solid grey;
    text-align: right;
    padding: 10px;
  }
  .nav-item:last-child{
    border-bottom: none !important;
  }

  @media(min-width:575px){
    li{
      border: none;
    }
  }

</style>