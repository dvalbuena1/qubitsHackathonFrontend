<template>
  <div>
    <h2 class="ml-6">
      Paginas de Facebook:
    </h2>
    <ul>
      <li v-bind:key="pagina.id" v-for="pagina in paginas">
        <v-card class="mx-auto m-5 p-5" tile>
          <v-card-title>
            {{pagina.name}}
            </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
              <v-btn class="mr-2 mb-2">
                <a :href="pagina.url">Visita la pagina</a>
              </v-btn>
            </v-card-actions>
        </v-card>
      </li>
      <li>
          <v-card>
            <v-card-actions>
              <v-btn
                    color="success"
                    class="ml-2 mb-2"
                    to="/perfil/AgregarPagina"
                  >
                  Agregar Pagina
                  </v-btn>
                  <v-btn
                  color="primary"
                  class="ml-2 mb-2"
                  to="/comoAgregarPagina"
                  >
                  ¿Cómo agregar Página?
                  </v-btn>
            </v-card-actions>
          </v-card>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    paginas:Array
  },
  data: () => ({
      //Paginas: [],
      agregar:false
    }),
    // async created(){
    //   const config = {
    //     headers:{
    //       "x-auth-token": this.$auth.getToken("local")
    //     }
    //   }
    //   const res = await this.$axios.$get('/v1/page/'+localStorage.getItem('id'),config)
    //   this.Paginas = res
    // }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
