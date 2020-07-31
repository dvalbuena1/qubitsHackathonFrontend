<template>
  <div>
    <h2 class="ml-6">
      Bots:
    </h2>
    <v-card>
    <ul>
      <li v-bind:key="bot.id" v-for="bot in bots">
          <!-- <v-card-title> -->
          <h2>{{bot.nombre}}</h2>
          <!-- </v-card-title> -->
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
      </li>
      <li>
          <v-card-actions>
            <v-btn
                  color="success"
                  class="ml-2 mb-2"
                  to="/perfil/Botconfig"
                >
                Agregar bot
                </v-btn>
          </v-card-actions>
      </li>
    </ul>
    </v-card>
  </div>
</template>

<script>
export default {
  props:{
    botEmpty:Boolean,
    bots:Array
  },
  data: () => ({
    }),
  }
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
