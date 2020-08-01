<template>
  <div>
    <!-- <v-subheader class="ml-6">Paginas de Facebook</v-subheader> -->
    <v-card class>
      <v-toolbar color="teal" dark rounded short>
        <v-toolbar-title>Paginas de Facebook</v-toolbar-title>
      </v-toolbar>
      <ul>
        <li v-if="pagEmpty">
          <br />
          <v-alert border="top" colored-border type="info" elevation="2">
            <h4>No has vinculado ninguna página!</h4>Si ya tienes todos los datos necesarios puedes proceder a agregar una pagina dandole click al boton de agregar pagina
          </v-alert>
        </li>
        <br />
        <li v-bind:key="pagina.id" v-for="(pagina, index) in paginas">
          <h3>{{pagina.name}}</h3>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="cyan lighten-2" dark small bottom left fab :href="pagina.url">
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
            <v-btn color="error" dark small bottom left fab @click.prevent="dialogIndex(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <!-- <v-btn class="mr-2 mb-2" color="cyan lighten-2" :href="pagina.url" x-small>Visitar</v-btn>
            <v-btn class="mr-2 mb-2" color="error" @click.prevent="dialogIndex(index)" x-small>Eliminar</v-btn>-->
          </v-card-actions>
          <v-divider></v-divider>
        </li>
        <li>
          <v-row>
            <v-btn color="teal" dark small bottom left fab to="/perfil/AgregarPagina">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="grey lighten-1"
              dark
              small
              bottom
              left
              fab
              to="/comoAgregarPagina"
              class="mr-4"
            >
              <v-icon>mdi-information-outline</v-icon>
            </v-btn>
          </v-row>
          <v-dialog v-model="dialog" max-width="290">
            <div class="text-center">
              <v-card>
                <v-card-title>Eliminar página</v-card-title>
                <v-card-text class="text-left">
                  <p>esta seguro de eliminar la pagina?</p>
                  <p>No hay vuelta atras</p>
                </v-card-text>
                <v-card-actions class>
                  <v-btn text @click="dialog = false">cancelar</v-btn>

                  <v-btn color="red" text @click.prevent="eliminarPagina">eliminar</v-btn>
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
    paginas: Array,
    pagEmpty: Boolean,
  },
  data: () => ({
    dialog: false,
    agregar: false,
    indexAct: 0,
  }),
  methods: {
    async eliminarPagina() {
      this.dialog = false;
      const config = {
        headers: {
          "x-auth-token": this.$auth.getToken("local"),
        },
      };
      try {
        const res2 = await this.$axios.$delete(
          "/v1/page/" + this.paginas[this.indexAct].id,
          config
        );
        //this.paginas.splice(this.indexAct, 1);

        this.$router.go({ path: "/perfil", force: true });
      } catch (error) {
        console.log(error);
      }
    },
    dialogIndex(index) {
      this.dialog = true;
      this.indexAct = index;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
