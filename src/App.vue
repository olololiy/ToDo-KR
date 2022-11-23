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
      <v-text-field label="First name"
                    type="date"
                    v-model="taskStore.today"
                    :min="todayday.today"


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
    <h4>в работе</h4>
    <div class="task_list" v-for="task of taskStore.tasks">
      <v-card :title="task.title" :text="task.body" variant="outlined" v-if="!task.done">
        <v-card-actions>
          <v-btn @click="taskStore.makeDone(task)">Done</v-btn>
          <v-btn @click="taskStore.removeTask(task)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <h4>архив</h4>
    <div class="task_list" v-for="task of taskStore.tasks">
      <v-card :title="task.title" :text="task.body" variant="outlined" v-if="task.done">
        <v-card-actions>
          <v-btn @click="taskStore.makeDone(task)">Done</v-btn>
          <v-btn @click="taskStore.removeTask(task)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </main>
</template>

<script setup>
import {useTaskStore} from "@/stores/StoreTask";

const taskStore = useTaskStore()
const todayday = new Date().toISOString().slice(0, 10)
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
