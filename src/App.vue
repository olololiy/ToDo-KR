<template>
  <main>
    <v-form>

      <v-text-field
          class="title"
          label="title"
          v-model="taskStore.title"
      >
      </v-text-field>
      <v-text-field
          class="description"
          label="description"
          v-model="taskStore.body"
      >
      </v-text-field>
      <v-text-field label="date"
                    type="date"
                    v-model="taskStore.enddate"
                    :min="todayday"
      >

      </v-text-field>

      <v-btn
          style="display: block"
          class="add-btn"
          @click="taskStore.addTask"
      >
        ADD
      </v-btn>
    </v-form>
    <h4 v-if="taskStore.tasks.find(task => task.done === false)">в работе</h4>
    <div class="task_list" v-for="task of taskStore.tasks">
      <v-card :title="task.title" :text="task.body" variant="outlined" v-if="!task.done">
        <v-card-actions>
          <v-card-title>{{task.enddate}}</v-card-title>
          <v-btn @click="taskStore.makeDone(task)">Done</v-btn>
          <v-btn @click="taskStore.removeTask(task)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <h4 v-if="taskStore.tasks.find(task => task.done === true)">архив</h4>

    <div class="task_list" v-for="task of taskStore.tasks">
      <v-card :title="task.title" :text="task.body" variant="outlined" v-if="task.done">
        <v-card-actions>
          <v-btn @click="taskStore.makeDone(task)">Done</v-btn>
          <v-btn @click="taskStore.removeTask(task)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <h4 v-if="taskStore.tasks.length === 0">задач нет</h4>
  </main>
</template>

<script setup>
import {useTaskStore} from "@/stores/StoreTask";

const taskStore = useTaskStore()
const todayday = new Date().toISOString().slice(0, 10)
const enddate = () =>{
  console.log(modelValue)
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
  padding: 15px;
}
</style>
