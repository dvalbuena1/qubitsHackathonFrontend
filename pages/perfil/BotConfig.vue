<template>
  <div>
    <h1>Creacion de Bot</h1>
    <p>A continuacion podrá realizar la configuración de su bot:</p>
    <NombreBot v-if="!config" v-on:botCreated="botCreated1" :paginas="paginas"/>
    <v-form v-if="config" @submit.prevent="onSubmit">
      <ChatConfig :propJson="jsonCofig" :first="true" v-on:jsonChange="change" :depth="1" />
      <v-row>
        <v-spacer></v-spacer>
        <v-btn type="submit">Finalizar</v-btn>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import NombreBot from "../../components/NombreBot";
import chatConfig from "../../components/chatConfig";

export default {
  async created(){
    const config = {
        headers:{
          "x-auth-token": this.$auth.getToken("local")
        }
      }
    const res2 = await this.$axios.$get('/v1/page/'+localStorage.getItem('id'),config)
    this.paginas = res2
  },
  methods: {
    change(value) {
      this.jsonCofig = value;
      console.log(this.jsonCofig);
    },
    async onSubmit() {
      console.log(this.jsonCofig);
      const config = {
        headers:{
          "x-auth-token": this.$auth.getToken("local")
        }
      }
      var data = {
        name:this.nomBot,
        PageId:this.paginaBot
      }
      try{
        const res = await this.$axios.$post('/v1/bot/'+localStorage.getItem('id'),data,config)
      }
      catch(error){
        console.log(error)
      }

      this.$router.push("/perfil");
    },
    botCreated1(value){
      this.config = true
      this.paginaBot = value[0].id
      this.nomBot = value[1]
    }
  },

  data() {
    return {
      nomBot:"",
      paginaBot:"",
      paginas:[],
      config: false,
      jsonCofig: {
        name: "Menu Inicial",
        message: "",
        options: [],
      },
    };
  },
  components: {
    NombreBot,
    chatConfig,
  },
};
</script>

<style>
</style>
