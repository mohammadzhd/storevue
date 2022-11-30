<template>
    <div>
        <i @click="trueOrfalse(task.id)" class="bi text-dark me-1 fs-5" :class="{'bi-check':!task.completed , 'bi-check-all':task.completed}"></i>
        <i @click="deletethis(task.id)" class="bi bi-trash-fill text-dark"></i>
    </div>
</template>

<script>
import {useStore} from "vuex"
export default {
    props:['task'],
    setup(){
        const store = useStore();

        function trueOrfalse(id){
            store.commit('task/trueOrfalse',id)
        }

        function deletethis(id){
            store.commit('task/deletethis',id)
        }
        

        return{trueOrfalse , deletethis}
    }
    
}
</script>

<style scoped>
i{
    cursor: pointer;
}
</style>