<template>
  <div>
    <h3>
      Informacion:
    </h3>
    <ul>
      <li v-bind:key="info.id" v-for="info in Info">
        <v-card class="mx-auto m-5 p-5" tile>
          <p>{{info.text}}</p>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
data: () => ({
      Info: [
        { text: 'Pagina1', id: 1},
        { text: 'Pagina2', id: 2},
        { text: 'Pagina3', id: 3},
      ],
    }),
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
p{
  font-size: large;
}
</style>
