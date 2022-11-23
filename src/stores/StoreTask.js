import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";

export const useTaskStore = defineStore('taskStore',() => {

    const tasks = ref([
        {id: 1, title: "homework", body: 'do homework'},
        {id: 2, title: "cleaning", body: 'do debug'},
        {id: 3, title: "learning", body: 'do js'},
    ]);
    const taskInLocalStorage = localStorage.getItem("tasks")
    if (taskInLocalStorage){
        tasks.value = JSON.parse(taskInLocalStorage)._value;
        console.log(JSON.parse(taskInLocalStorage))
    }
    const title = ref('');
    const body = ref('');
    const addTask = () => {
        let newTask = {
            id: Date.now(),
            title: title.value,
            body: body.value
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
    watch(()=> tasks, (state) => {
        localStorage.setItem('tasks', JSON.stringify(state))
    },{deep: true})

    return{removeTask, addTask, tasks, title,body}


})


