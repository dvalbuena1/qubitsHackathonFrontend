<template>
  <div>
    <h3>
      Bots:
    </h3>
    <ul>
      <li v-bind:key="bot.id" v-for="bot in Bots">
        <v-card class="mx-auto m-5 p-5" tile>
          <v-card-title>
          {{bot.nombre}}
          </v-card-title>
          <br>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
data: () => ({
      Bots: [
        { nombre: 'Bot1', id: 1},
        { nombre: 'Bot2', id: 2},
        { nombre: 'Bot3', id: 3},
      ],
    }),
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
