<template>
  <div>
    <h2 class="ml-6">Paginas de Facebook:</h2>
    <v-card class="ml-6">
      <ul>
        <li v-if="pagEmpty">
          <br />
          <v-alert
            border="top"
            colored-border
            type="info"
            elevation="2"
          >No has vinculado ninguna página!</v-alert>si ya tienes todos los datos necesarios puedes proceder a agregar una pagina dandole click al boton de agregar pagina
        </li>
        <br />
        <li v-bind:key="pagina.id" v-for="(pagina, index) in paginas">
          <!-- <v-card class="mx-auto m-5 p-5" tile> -->
          <h2>{{pagina.name}}</h2>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="mr-2 mb-2" color="primary" :href="pagina.url">Visita la pagina</v-btn>
            <v-btn class="mr-2 mb-2" color="error" @click.prevent="dialogIndex(index)">Eliminar</v-btn>
          </v-card-actions>
        </li>
        <br />
        <li>
          <!-- <v-card-actions> -->
          <v-btn color="success" class="mb-2" to="/perfil/AgregarPagina">Agregar Pagina</v-btn>
          <v-btn color="primary" class="ml-2 mb-2" to="/comoAgregarPagina">¿Cómo agregar Página?</v-btn>
          <!-- </v-card-actions> -->
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
      console.log(this.paginas[this.indexAct].id);
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
        this.paginas.splice(this.indexAct, 1);
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
