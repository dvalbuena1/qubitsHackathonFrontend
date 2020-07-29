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
    pregunta:"",
    mensajesNode:{
      message:"",
      options:[],
      type:"",
      id: 0
    },
    actual = mensajesNode,
    mensaje:"",
    type:"",
    id:0
  }),
  methods:{
    preguntaDone(){
      this.preguntaComp = true
    },
    addMessage(){
      let nodeAdd = {message = this.mensaje,
                    options:[],
                    type:this.type,
                    idB = id+1}
      this.actual.options.push(nodeAdd)
      actual = nodeAdd
    },
    findById(id){
      if (this.actual.id == id) {
        return this.actual
      }
      else{
        for (let index = 0; index < this.actual.options.length; index++) {
          const element = this.actual.options[index];
          return this.findById(id)
        }
      }
    }
  }
}
</script>

<style>

</style>
