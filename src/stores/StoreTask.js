import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";

export const useTaskStore = defineStore('taskStore',() => {

    const tasks = ref([
        {id: 1, title: "homework", body: 'do homework', done: true, enddate: ''},
        {id: 2, title: "cleaning", body: 'do debug', done: false, enddate: ''},
        {id: 3, title: "learning", body: 'do js', done: false, enddate: ''},
    ]);
    const taskInLocalStorage = localStorage.getItem("tasks")
    if (taskInLocalStorage){
        tasks.value = JSON.parse(taskInLocalStorage)._value;
        console.log(JSON.parse(taskInLocalStorage))
    }

    const title = ref('');
    const body = ref('');
    const enddate = ref('')
    const status = ref(false)
    const today = ref(new Date().toISOString().slice(0, 10))

    // console.log(today.value)
    const addTask = () => {
        let newTask = {
            id: Date.now(),
            title: title.value,
            body: body.value,
            done: false,
            enddate: enddate.value
        }
        console.log("newTask: ",newTask)
        tasks.value.push(newTask)
        console.log("addTask")
        title.value=''
        body.value=''
        enddate.value=''
    };
    const removeTask = task => {
        console.log("removeTask")
        tasks.value = tasks.value.filter(item => item.id !== task.id)
    };
    const makeDone= task =>{
        task.done = true
        console.log(tasks.value)
    }
    watch(()=> tasks, (state) => {
        localStorage.setItem('tasks', JSON.stringify(state))
    },{deep: true})

    return{removeTask, addTask, makeDone, tasks, title,body, enddate}


})


