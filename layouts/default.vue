<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-toolbar-title to="/">Qubit APP </v-toolbar-title>

      <v-spacer />

      <!-- login button -->
      <v-btn color="blue" style="margin:10px;" to="/login">Ingresar</v-btn>
      <!-- Overlay button -->
      <v-btn color="blue" @click="overlay = true">Registrarse</v-btn>

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
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

export default {
  components: {
    SignUp,
  },

  data() {
    return {
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
