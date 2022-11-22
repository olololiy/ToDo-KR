<template>
  <main>
    <v-form>
      <v-text-field
          class="title"
          label="title"
          :value="title"
          @input="title=$event.target.value"
      >
      </v-text-field>
      <v-text-field
          class="description"
          label="description"
          :value="body"
          @input="body=$event.target.value"
      >
      </v-text-field>
      <v-btn
          class="add-btn"
          @click="addTask"
      >
        ADD
      </v-btn>
    </v-form>

    <div class="task_list" v-for="task in tasks">
      <v-card :title="task.title" :text="task.body" variant="outlined">
        <v-card-actions>
          <v-btn>Done</v-btn>
          <v-btn @click="removeTask(task)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </div>

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
      tasks: [
        {id: 1, title: "homework", body: 'do homework'},
        {id: 2, title: "cleaning", body: 'do debug'},
        {id: 3, title: "learning", body: 'do js'},
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    addTask(){
      let newTask = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }
      this.tasks.push(newTask)
      this.title=''
      this.body=''
    },
    removeTask(task){
      this.tasks = this.tasks.filter(p => p.id !== task.id)
    }
  },
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
