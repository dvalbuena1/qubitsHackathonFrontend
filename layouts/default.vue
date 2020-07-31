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
        <v-img src="https://i.imgur.com/SiRWpcM.png" style="transform: translate( 0, -4px)" max-width="180px" ></v-img>
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
      <v-card flat tile class="lighten-1 white--text text-center">
        <v-card-text
          class="white--text pt-0"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec sagittis lectus. Donec tincidunt mi vitae mollis egestas. Donec mauris justo, rutrum non massa quis, ultricies ullamcorper lacus. Proin ac massa nulla. Proin condimentum felis at massa vehicula egestas. Sed pellentesque purus id magna vehicula sagittis. Donec ac varius risus, at luctus velit. Pellentesque aliquam quam vitae consectetur malesuada. Aenean laoreet nisi non nisl mollis maximus sit amet at erat. Donec varius ligula quis ipsum tempor vestibulum. Vestibulum at nisi justo. In eleifend tortor eleifend ante finibus, at vulputate dolor fringilla. Ut at augue lobortis, laoreet nibh a, lacinia risus.</v-card-text>
      </v-card>
      <v-divider></v-divider>
      <v-card-text class="white--text text-center">
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-card-text>
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
