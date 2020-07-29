<template>
  <div>
    <div>
      <h2>
        Escriba la pregunta que le realizara al cliente:
      </h2>
      <v-form @submit.prevent = "preguntaDone">
        <v-text-field
                label="Pregunta"
                outlined
                required
                :v-model="pregunta"
                :disabled="preguntaComp"
              >
        </v-text-field>
      </v-form>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    numReplies = 0,
    preguntaComp: false,
    pregunta:""
  }),
  methods:{
    preguntaDone(){
      this.preguntaComp = true
    }
  }
}
</script>

<style>

</style>
