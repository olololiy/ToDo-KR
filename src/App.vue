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
      <v-btn
          class="add-btn"
          @click="taskStore.addTask"
      >
        ADD
      </v-btn>
    </v-form>
    <div class="task_list" v-for="task of taskStore.tasks">
      <v-card :title="task.title" :text="task.body" variant="outlined">
        <v-card-actions>
          <v-btn>Done</v-btn>
          <v-btn @click="taskStore.removeTask(task)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </div>

  </main>
</template>

<script setup>
import {useTaskStore} from "@/stores/StoreTask";

const taskStore = useTaskStore()

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
