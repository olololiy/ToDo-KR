<template>
  <main>
    <TaskInput
        @create="createTask"
    ></TaskInput>
    <TaskList
        :taskList="taskList"
        @remove="removeTask"
    ></TaskList>
  </main>
</template>

<script>
import TaskCard from "@/components/TaskCard";
import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";

export default {
  name: 'App',
  components: {
    TaskInput,
    TaskCard,
    TaskList
  },
  data() {
    return {
      taskList: []
    }
  },
  methods: { //поле
    createTask(task) { //брал экземпляр из текущей модели
      this.taskList.push(task)
    },
    removeTask(task) {
      this.taskList = this.taskList.filter(p => p.id !== task.id)
    }
  }
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  max-width: 450px;
  margin: 0 auto;
}
</style>
