<template>
  <div class="container">
  
    <CreateTask/>
    <hr>
    <div class="container text-start">
      <div class=" col-md-2">
      <small>Filter Tasks :</small>
      <select v-model="number" class="form-select form-select-sm">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      </div>
    </div>

    <div class="container text-center" v-if="loading">
      <div class="spinner-border" role="status">
      </div><br>
      <span dir="ltr" class="text-white">Loading...</span>
    </div>

    <div  class="container mt-3">
      <div class="row g-3">
        <div v-for="task in tasks" :key="task.id" class="col-md-4" v-show="task.id<=number">
          <div class="card"  :class="{'grey':task.completed}">
            <div class="card-body d-flex justify-content-between">
                <div>
                  <del v-if="task.completed">{{shorten(task.title)}}</del>
                  <span v-else>{{shorten(task.title)}}</span>
                </div>
                <!-- <div>
                  <i class="bi text-dark fs-5" :class="{'bi-check':!task.completed , 'bi-check-all':task.completed}"></i>
                </div> -->
                <Completed :task="task" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CreateTask from "../components/CreateTask.vue";
import Completed from "../components/Completed.vue";
import { computed , ref, watchSyncEffect} from 'vue';
import {useStore} from "vuex"

   

export default {
   
  components:{CreateTask,Completed},

  setup(){
    const store = useStore();
    
    const number = ref(10)
    const filter = ref(16)
    const loading=ref(false);
    
    async function getApi(){
            loading.value= true
            //در اینجا برای اینکه باز دیتا هارو موقع رندر نگیره باید فانکشن رو بجای اینکه از اکشن صدا بزنیم از گتر اون رو صدا بزنیم
            await store.getters['task/getApi']

            loading.value=false
          }
    getApi()


    const tasks = computed(()=> store.state['task'].tasks)
    
    function shorten(title){
      const splitedTitle = title.split(" ");
      if(splitedTitle[3]===undefined || splitedTitle[2]===undefined || splitedTitle[1]===undefined){
         return title;
      }     
      else{
        const newTitle = splitedTitle[0] + " " +splitedTitle[1]+" "+splitedTitle[2]+" "+splitedTitle[3];  
        return newTitle;
      }
    }

    return{tasks , shorten , loading  ,number}
  },
  
}
</script>

<style scoped>
div{
  direction: ltr;
}
.card-body , span , del,option{
  color: black ;
  margin-bottom: 0;
}
.grey{
  background: rgb(235, 235, 235);
}
</style>