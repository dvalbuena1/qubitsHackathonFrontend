<template>
  <div>
    <h3>
      Paginas de Facebook:
    </h3>
    <ul>
      <li v-bind:key="pagina.id" v-for="pagina in Paginas">
        <v-card class="mx-auto m-5 p-5" tile>
          <v-card-title>
          {{pagina.nombre}}
          </v-card-title>
          <v-btn>
          <a :href="pagina.url">Visita la pagina</a>
          </v-btn>
          <br>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
      Paginas: [
        { nombre: 'nombre Pagina 1', url:'https://www.google.com',id: 1},
        { nombre: 'nombre Pagina 2', url:'https://www.google.com',id: 2},
        { nombre: 'nombre Pagina 3', url:'https://www.google.com',id: 3},
      ],
    }),
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
