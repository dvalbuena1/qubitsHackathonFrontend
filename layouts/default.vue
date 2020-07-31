<template>
  <v-app transparent fluid>
    <v-app-bar
      :clipped-left="clipped"
      absolute
      color="teal lighten-4"
      dark
      hide-on-scroll
      prominent
      scroll-target="#scrolling-techniques-4"
      app
    >
      <router-link margin-bottom="10px" to="/">
        <v-img src="https://i.ibb.co/r3CnwVX/logo-qubot-4-0-final.png" height="130px" width="420px"></v-img>
      </router-link>
      <v-spacer />
      <v-container fluid >
        <v-row justify="end" align="center">
          <!-- login button -->
          <v-btn v-if="!isAuthenticated" color="blue" style="margin:10px;" to="/login">Ingresar</v-btn>
          <!-- register button -->
          <v-btn v-if="!isAuthenticated" color="blue" @click.prevent="openDialog">Registrarse</v-btn>
          <!-- Profile button -->
          <v-chip
            class="ma-2"
            color="primary"
            text-color="white"
            v-if="isAuthenticated"
            to="/perfil"
          >
            <v-avatar left>
              <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
            {{auth.user.name}}
          </v-chip>
          <v-btn icon v-if="isAuthenticated" @click.prevent="logOut">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>



    <!-- Generate overlay -->
    <sign-up ref="dialog" @closeDialog="closeDialog()" />

    <v-content>
      <v-container class="pa-0 ma-0" fluid>
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
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
    ...mapState(["auth"]),
  },

  components: {
    SignUp,
  },

  methods: {
    async logOut() {
      await this.$auth.logout();
    },
    openDialog() {
      this.$refs.dialog.openDialog();
    },
    closeDialog() {
      this.$refs.dialog.closeDialog();
    },
  },

  data() {
    return {
      login: localStorage.getItem("token"),
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
