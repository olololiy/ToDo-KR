<template>

  <v-card title="Card title" text="..." variant="outlined">
    <v-card-actions>
      <v-btn>Click me</v-btn>
    </v-card-actions>
  </v-card>

  <div>
    <div>
      <h4>{{ model.title }}</h4>
      <p>{{model.description}}</p>
    </div>
    <div>
      <button v-if="!model.status">готово</button>
      <button v-else>удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    model: {
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