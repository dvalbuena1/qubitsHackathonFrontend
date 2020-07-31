<template>
  <div>
    <ul>
      <li>
        <v-subheader>Informacion personal</v-subheader>
        <v-card class="mx-auto m-5 p-5" tile>
          <v-card-title>
            <v-avatar class="mr-10" color="blue" size="100">
              <span class="white--text headline">{{auth.user.name.charAt(0)}}</span>
            </v-avatar>
            <v-icon class="mr-6" size="50">mdi-account</v-icon>
            <h1>{{auth.user.name}}</h1>
            <v-spacer></v-spacer>
            <v-icon size="30" class="mr-6">mdi-email</v-icon>
            <h2>{{auth.user.email}}</h2>
          </v-card-title>
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
    password: "*****************",
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
