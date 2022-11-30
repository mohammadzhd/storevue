<template>
    <div class="col-md-12 row">
        <h6>Create Task</h6>
        <form class="row" @submit.prevent="storeTask">
            <div class="col-md-6">
                <input v-model="title" type="text" class="form-control" placeholder="title...">
            </div>
            <div class="col-auto">
                <button class="btn btn-light">Create</button>
            </div>
        </form>
        <small class="text-danger" v-if="empty">Title is required!</small>
    </div>
</template>

<script>
import {ref} from "vue";
import {useStore} from "vuex";
export default {
    setup(){
        const store = useStore()
        const title=ref("")
        const empty = ref(false)

        function storeTask(){
            if(title.value.trim() == ""){
                empty.value = true
            }
            else{
                let newID = Math.floor(Math.random()*20)
                empty.value = false;
               
                store.state['task'].tasks.unshift({id:-newID,title:title.value,completed:false})
                title.value=""
                }
        }
        return{title,empty,storeTask}
    }
}
</script>