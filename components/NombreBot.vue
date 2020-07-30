<template>
  <div>
    <v-form ref="form" @submit.prevent="nombreBot">
      <v-text-field label="Nombre Bot" outlined required v-model="name"></v-text-field>
      <v-combobox
          v-model="select"
          :items="paginas"
          item-text="name"
          label="Seleccionar pagina del bot"
        ></v-combobox>
      <v-row>
        <v-col cols="6">
          <v-btn type="submit" class="submit" color="blue">Aceptar</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn to="/perfil" color="error">Cancelar</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  props:{
    paginas:Array
  },
  data: () => ({
    name: "",
    select:[]
  }),
  methods: {
    async nombreBot() {
      var id = this.$auth.user.id;
      /* const result = await this.$axios.$post(
        "v1/bot/" + id,
        {
          name: this.name,
        },
        {
          headers: {
            "x-auth-token": this.$auth.getToken("local"),
          },
        }
      ); */

      this.$emit("botCreated",this.select);
      /* console.log(result); */
    },
    cancel(){
      this.$refs.form.reset()
    }
  },
};
</script>

<style>
</style>
