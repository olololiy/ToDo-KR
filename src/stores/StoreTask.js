import {defineStore} from "pinia";
import {ref} from "vue";

export const useTaskStore = defineStore('taskStore',{})

    let tasks = ref([
        {id: 1, title: "homework", body: 'do homework'},
        {id: 2, title: "cleaning", body: 'do debug'},
        {id: 3, title: "learning", body: 'do js'},
    ]);
    let title = ref('');
    let body = ref('');
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
        console.log("до", tasks.value)
        tasks.value = tasks.value.filter(item => item.id !== task.id)
        console.log("после", tasks.value)
    };
    return{removeTask, addTask, tasks, title,body}
