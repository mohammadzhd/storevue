import axios from 'axios';
import Swal from 'sweetalert2';

const task = {
    namespaced: true,
    state: {
        tasks:[],     
      },
    
      getters: {
      },
    
      mutations: {
        setTasks(state , tasks){
            state.tasks = tasks
        },
        trueOrfalse(state,id){
          let thisTask = state.tasks.find(item => item.id === id)
          thisTask.completed = !thisTask.completed;
        },
        deletethis(state,id){
          Swal.fire({
            title: "Task Deleted",
            icon: "error",
            width: 250,
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 2000,
            toast: true,
            position: 'top',
        });
          state.tasks = state.tasks.filter(item => item.id !== id)
        }
      },
    
      actions: {
       async getTasks(context){
                try{
                  let response =await axios.get("https://jsonplaceholder.typicode.com/todos");
                  context.commit('setTasks',response.data) 
                }   
                catch(error){
                  Swal.fire({
                    title: 'Error',
                    text: 'There is a problem,please try again!',
                    icon: 'error',
                    confirmButtonText:'OK'
                  })
                }
              }
      }
}

export default task;