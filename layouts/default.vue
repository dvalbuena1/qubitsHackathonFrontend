<template>
  <v-app transparent fluid>
    <v-app-bar
      :clipped-left="clipped"
      absolute
      color="rgb(24, 53, 91)"
      dark
      height="80px"
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
      app
    >
      <router-link to="/">
        <v-img
          src="https://i.imgur.com/SiRWpcM.png"
          style="transform: translate( 0, -4px)"
          max-width="180px"
        ></v-img>
      </router-link>
      <v-spacer />
      <v-container fluid>
        <v-row justify="end" align="center">
          <!-- login button -->
          <v-btn v-if="!isAuthenticated" color="blue" style="margin:10px;" to="/login">Ingresar</v-btn>
          <!-- register button -->
          <v-btn v-if="!isAuthenticated" color="blue" @click.prevent="openDialog">Registrarse</v-btn>
          <!-- Profile button -->
          <v-chip
            class="ma-2"
            color="rgb(24, 53, 91)"
            text-color="white"
            v-if="isAuthenticated"
            to="/perfil"
          >
            <v-avatar left>
              <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
            <h3>{{auth.user.name}}</h3>
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

    <v-footer padless>
      <v-card flat tile class="text-center" width="100%">
        <v-card-text fluid>
          <h3>Sponsors</h3>
          <v-row>
            <v-col cols="6">
              <v-img height="180px" src="https://i.imgur.com/YsZjyuk.png"></v-img>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="5">
              <v-img width="500px" src="https://i.imgur.com/af4CgTQ.png"></v-img>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-text class="white--text text-center">
          <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-card-text>
      </v-card>
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

<style scope>
.exit-btn {
  margin-top: 0.5rem;
  margin-right: 1rem;
}
v-card-title {
  text-align: center;
}
.v-footer{
  justify-content: center;
}
</style>
