<template>
  <div>
    <h2 class="ml-6">Informacion:</h2>
    <ul>
      <li>
        <v-card class="mx-auto m-5 p-5" tile>
          <v-row>
            <v-col :cols="3" class="ml-4 mt-3">Nombre:</v-col>
            <v-col :cols="8">
              <v-text-field :value="auth.user.name" label="Solo" solo readonly></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col :cols="3" class="ml-4 mt-3">Email:</v-col>
            <v-col :cols="8">
              <v-text-field :value="auth.user.email" label="Solo" solo readonly></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col :cols="3" class="ml-4 mt-3">Contraseña:</v-col>
            <v-col :cols="8">
              <v-text-field :value="auth.user.password" label="Solo" solo readonly></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" class="mr-4 mb-4">Cambiar</v-btn>
          </v-card-actions>
        </v-card>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["auth"]),
  },
  data: () => ({
    nombre: "",
    email: "",
    password: "",
    usuario: {},
  }),
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
.v-text-field {
  font-size: 200;
}
</style>
