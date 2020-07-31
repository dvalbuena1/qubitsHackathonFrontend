<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn rounded to="/" style="text-transform: none;">Qubit APP</v-btn>

      <v-spacer />

      <!-- login button -->
      <v-btn v-if="!isAuthenticated" color="blue" style="margin:10px;" to="/login">Ingresar</v-btn>
      <!-- register button -->
      <v-btn v-if="!isAuthenticated" color="blue" @click="overlay = true">Registrarse</v-btn>
      <!-- Profile button -->
      <v-btn icon v-if="isAuthenticated" to="/perfil">
        <v-icon>mdi-face-outline</v-icon>
      </v-btn>
      <v-btn icon v-if="isAuthenticated" @click.prevent="logOut">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Generate overlay -->
    <sign-up :isVisible="overlay" @closeDialog="overlay = false" />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import SignUp from "~/components/SignUp.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },

  components: {
    SignUp,
  },

  methods: {
    async logOut() {
      await this.$auth.logout();
    },
  },

  data() {
    return {
      login: localStorage.getItem("token"),
      overlay: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>

<style>
.exit-btn {
  margin-top: 0.5rem;
  margin-right: 1rem;
}
v-card-title {
  text-align: center;
}
</style>
