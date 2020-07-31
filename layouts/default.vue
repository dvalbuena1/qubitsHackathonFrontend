<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      absolute=""
      color="teal lighten-4"
      dark
      hide-on-scroll
      prominent
      scroll-target="#scrolling-techniques-4"
    >
      <router-link
      margin-bottom="10px"
      to="/">
            <v-img
              src="https://i.ibb.co/r3CnwVX/logo-qubot-4-0-final.png"
              height="130px"
              width="420px"
            ></v-img>
          </router-link>
          <v-spacer/>
      <v-container fluid align="left">


        <v-row justify="center" align="center" class="navbar_main">
          <!-- login button -->
          <v-btn
            v-if="!isAuthenticated"
            color="blue"

            style="margin:10px;"
            to="/login"
            >Ingresar</v-btn
          >
          <!-- register button -->
          <v-btn v-if="!isAuthenticated" color="blue" @click="overlay = true"
            >Registrarse</v-btn
          >
          <!-- Profile button -->
          <v-btn icon v-if="isAuthenticated" to="/perfil">
            <v-icon>mdi-face-outline</v-icon>
          </v-btn>
          <v-btn icon v-if="isAuthenticated" @click.prevent="logOut">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>

    <section id="intro">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      >
        <v-container fill>
          <v-row class="mx-auto">
            <v-col


      >
            <div class="text-center">

              <v-card
                color="transparent"
                class="display-3 font-weight-black mb-4"
                style="margin:120px;"
              >
                <v-card-title
                  >Incrementa tus ventas de manera automatica</v-card-title
                >
                <v-card-subtitle>
                  Ayudamos a tu negocio a comer monda</v-card-subtitle
                >
                <v-card-actions>
                  <v-btn text to="../pages/comoAgregarPagina">Averigua como</v-btn>
                </v-card-actions>
              </v-card>






            </div>
            </v-col>

            <v-card
              color="transparent"
              class="title font-weight-regular text-uppercase"
               style="margin:120px;"
            >
              <v-card-title> No se que escribir aca</v-card-title
                >
                <v-card-subtitle>
                  x2</v-card-subtitle>
            </v-card>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    <section
        id="features"
        class="grey lighten-3"
      >
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3" style="color:#272e61;">Componentes principales que tendra tu bot</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ icon, title, text }, i) in features"
              :key="i"
              cols="12"
              md="4"
            >
              <v-card
                class="py-12 px-4"
                color="grey lighten-5"
                flat
              >
                <v-theme-provider dark>
                  <div>
                    <v-avatar
                      color="primary"
                      size="88"
                    >
                      <v-icon
                        large
                        v-text="icon"
                      ></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title style="color:#272e61;"
                  class="wpd_wrapper"

                  v-text="title"
                ></v-card-title>

                <v-card-text style="color:#272e61;"
                  class="subtitle-1"
                  v-text="text"
                >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>












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
    ...mapGetters(["isAuthenticated"])
  },

  components: {
    SignUp
  },

  methods: {
    async logOut() {
      await this.$auth.logout();
    }
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
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",

       features: [
          {
            icon: 'mdi-contacts',
            title: 'coneccion rapida y segura en tiempo real con tus clientes',
            text: 'Pablo me la chupa',
          },
          {
            icon: 'mdi-sitemap',
            title: 'Respuesta rapida y eficiente a cualquier cliente',
            text: 'Pablo me la chupa',
          },
          {
            icon: 'mdi-robot',
            title: 'Automatizacion de servicios',
            text: 'Pablo me la chupa',
          },
        ],
    };
  }
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
