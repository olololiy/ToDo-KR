<template>
  <main>
    <TaskCard></TaskCard>
  </main>
</template>

<script>
import TaskCard from "@/components/TaskCard";
export default {
  name: 'App',
  components: {
    TaskCard
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
