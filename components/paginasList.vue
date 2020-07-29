<template>
  <div>
    <h2 class="ml-6">
      Paginas de Facebook:
    </h2>
    <ul>
      <li v-bind:key="pagina.id" v-for="pagina in Paginas">
        <v-card class="mx-auto m-5 p-5" tile>
          <v-card-title>
            {{pagina.nombre}}
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
                    to="/perfil/agregarPagina"
                  >
                  Agregar Pagina
                  </v-btn>
            </v-card-actions>
          </v-card>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
      Paginas: [
        { nombre: 'Nombre pagina 1', url:'https://www.google.com',id: 1},
        { nombre: 'Nombre pagina 2', url:'https://www.google.com',id: 2},
        { nombre: 'Nombre pagina 3', url:'https://www.google.com',id: 3},
      ],
    }),
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
