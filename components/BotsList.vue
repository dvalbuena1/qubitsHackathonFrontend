<template>
  <div>
    <h2 class="ml-6">Bots:</h2>
    <v-card class="ml-6">
      <ul>
        <li v-bind:key="bot.id" v-for="(bot,index) in botInfo">
          <!-- <v-card-title> -->
          <h2>{{bot.name}}</h2>
          <!-- </v-card-title> -->
          <v-card-text>
            <p class="ml-4">Pagina: {{bot.pageName}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" class="mr-6" @click.prevent="dialogDeleteBot(index)">eliminar bot</v-btn>
          </v-card-actions>
        </li>
        <li>
          <v-card-actions>
            <v-btn color="success" class="ml-2 mb-2" to="/perfil/Botconfig">Agregar bot</v-btn>
          </v-card-actions>
          <v-dialog v-model="dialog" max-width="290">
            <div class="text-center">
              <v-card>
                <v-card-title>Eliminar Bot</v-card-title>
                <v-card-text class="text-left">
                  <p>esta seguro de eliminar el bot?</p>
                  <p>No hay vuelta atras</p>
                </v-card-text>
                <v-card-actions class>
                  <v-btn text @click="dialog = false">cancelar</v-btn>

                  <v-btn color="red" text @click.prevent="eliminarBot">eliminar</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-dialog>
        </li>
      </ul>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    botEmpty: Boolean,
    botInfo: Array,
  },
  data: () => ({
    dialog: false,
    indexDel:0
  }),
  created() {
    console.log(this.botInfo);
  },
  methods: {
    async eliminarBot() {
      this.dialog = false;
      console.log(this.botInfo[this.indexDel].id);
      const config = {
        headers: {
          "x-auth-token": this.$auth.getToken("local"),
        },
      };
      try {
        const res2 = await this.$axios.$delete(
          "/v1/bot/" + this.botInfo[this.indexDel].id,
          config
        );
        this.botInfo.splice(this.indexDel, 1);
      } catch (error) {
        console.log(error);
      }
    },
    dialogDeleteBot(index){
      this.indexDel = index
      this.dialog = true
    }
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
