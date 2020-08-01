<template>
  <div>
    <h2>
      Por favor ingrese los datos de la pagina a vincular
    </h2>
      <v-row>
        <v-col cols="12">
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmit">
            <v-text-field label="Nombre de la pagina" outlined required v-model="name"></v-text-field>
            <v-text-field label="URL" outlined required v-model="url"></v-text-field>
            <v-text-field label="Facebook page ID" outlined required v-model="fPageId"></v-text-field>
            <v-text-field label="App ID" outlined required v-model="appId"></v-text-field>
            <v-text-field label="Page Access Token" outlined required v-model="pageAccessTok"></v-text-field>
            <v-text-field label="App Secret" outlined required v-model="appSecret"></v-text-field>
            <v-row>
              <v-col cols="6">
                <v-btn type="submit" color="blue" :disabled="!valid">Agregar</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn to="/perfil" color="error">cancelar</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
data: () => ({
      valid:false,
      name:"",
      url:"",
      fPageId:"",
      appId:"",
      pageAccessTok:"",
      appSecret:""
    }),
methods: {
    async onSubmit() {
      var page = {
        name: this.name,
        url: this.url,
        userId: localStorage.getItem('id'),
        facebookPageId: this.fPageId,
        appId:this.appId,
        pageAccessToken: this.pageAccessTok,
        appSecret: this.appSecret
      }
      var config = {
        headers:{
          "x-auth-token": this.$auth.getToken("local")
        }
      }
      console.log(page)
      console.log(localStorage.getItem('id'))
      try{
        const result = await this.$axios.$post("v1/page/"+localStorage.getItem('id'), page, config)
        this.$router.push("/perfil");
      }
      catch(error)
      {
        this.$refs.form.reset()
      }
    }
}
}
</script>

<style>

</style>
