import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";

export const useTaskStore = defineStore('taskStore',() => {

    const tasks = ref([
        {id: 1, title: "homework", body: 'do homework', status: true},
        {id: 2, title: "cleaning", body: 'do debug', status: false},
        {id: 3, title: "learning", body: 'do js', status: false},
    ]);

    const title = ref('');
    const body = ref('');
    const status = ref(false)
    const addTask = () => {
        let newTask = {
            id: Date.now(),
            title: title.value,
            body: body.value,
            status: false
        }
        console.log(newTask)
        tasks.value.push(newTask)
        console.log("addTask")
        title.value=''
        body.value=''
    };
    const removeTask = task => {
        console.log("removeTask")
        tasks.value = tasks.value.filter(item => item.id !== task.id)
    };
    const makeDone= task =>{
        console.log("removeTask")
        task.status = true
        tasks.value = tasks.value.filter(item => item.id !== task.id )
    }

    return{removeTask, addTask, tasks, title,body}


})


