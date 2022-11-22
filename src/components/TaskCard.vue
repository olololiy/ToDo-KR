<template>
  <v-card :title=task.title :text=task.description variant="outlined">
    <v-card-actions>
      <v-btn>Done</v-btn>
      <v-btn>Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    task: {
      required: true,
      default:{
        id: 0,
        title: 'defaultTitle',
        description: 'defaultDesc',
        status: false
      },
    }
},
setup()
{

}
}
</script>

<style scoped>

</style>