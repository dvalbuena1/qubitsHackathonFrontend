<template>
  <div>
    <h2 class="ml-6">
      Bots:
    </h2>
    <ul>
      <li v-bind:key="bot.id" v-for="bot in Bots">
        <v-card class="mx-auto m-5 p-5" tile>
          <v-card-title>
          {{bot.nombre}}
          </v-card-title>

          <p class="ml-4">Pagina:</p>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="error"
              class="mr-6"
            >
            eliminar bot
            </v-btn>
          </v-card-actions>
        </v-card>
      </li>
    </ul>
    <ul>
      <li>
        <v-card>
          <v-card-actions>
            <v-btn
                  color="success"
                  class="ml-2 mb-2"
                >
                Agregar bot
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
