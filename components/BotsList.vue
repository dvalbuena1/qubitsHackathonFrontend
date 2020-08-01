<template>
  <div>
    <v-card>
      <v-toolbar color="teal" dark rounded short>
        <v-toolbar-title>Bots</v-toolbar-title>
      </v-toolbar>
      <ul>
        <li v-if="botEmpty">
          <br />
          <v-alert border="top" colored-border type="info" elevation="2">
            <h4>No has vinculado ningun bot a tus paginas!</h4>puedes proceder a agregar una bot dandole click al boton de agregar
          </v-alert>
        </li>
        <br />
        <li v-bind:key="bot.id" v-for="(bot,index) in botInfo">
          <!-- <v-card-title> -->
          <h3>{{bot.name}}</h3>
          <!-- </v-card-title> -->
          <p class="ml-4 mt-1 mb-0">Pagina: {{bot.pageName}}</p>
          <v-card-actions>
            <v-spacer></v-spacer>
             <v-btn
              color="error"
                dark
                small
                bottom
                left
                fab
                @click.prevent="dialogDeleteBot(index)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <!-- <v-btn
              color="error"
              class="mr-6"
              @click.prevent="dialogDeleteBot(index)"
              x-small
            >eliminar</v-btn> -->
          </v-card-actions>
          <v-divider></v-divider>
        </li>
        <br />
        <li>
          <v-row>
            <v-btn
              color="teal"
                dark
                small
                bottom
                left
                fab
                to="/perfil/Botconfig"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <!-- <v-btn color="success" class="ml-3 mb-2" to="/perfil/Botconfig" x-small>Agregar bot</v-btn> -->
          </v-row>
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
    indexDel: 0,
  }),
  created() {
    console.log(this.botInfo);
    console.log('empty?',this.botEmpty);
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
    dialogDeleteBot(index) {
      this.indexDel = index;
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
