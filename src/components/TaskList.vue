<template>
  <TaskCard task=""
            v-for="task in taskList"
            :task="task"
            :key="task.id"></TaskCard>
</template>

<script>
import TaskCard from "@/components/TaskCard";

export default {
  name: "TaskList",
  components: {
    TaskCard
  },
  prop: {
    taskList: {
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped>

</style>