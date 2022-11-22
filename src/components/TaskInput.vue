<template>
  <v-form>
    <v-text-field class="title"
                  label="title"
                  :value="modelValue"
                  @input="updateInput"
    >
    </v-text-field>
    <v-text-field
                  class="description"
                  label="description"
    >
    </v-text-field>
    <v-btn class="add-btn"
    >
      ADD
    </v-btn>
  </v-form>
</template>

<script>

export default {
  props: {

  },
  methods: {
    updateInput(event){
      this.modelValue=event.target.value
    }
  }
}
</script>

<style scoped>

</style>