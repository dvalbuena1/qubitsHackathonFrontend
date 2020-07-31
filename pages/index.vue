<template>
  <v-container fluid>
    <v-parallax
      dark
      src="https://cdn.discordapp.com/attachments/734978502641713214/738603390447255593/unknown.png"
    >
    </v-parallax>

    <section id="intro">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
        src="https://mk0hootsuiteblof6bud.kinstacdn.com/wp-content/uploads/2018/05/facebook-cover-photo-940x470.jpg"
      >
        <v-container fill>
          <v-row class="mx-auto">
            <v-col>
              <div class="text-center">
                <v-card
                  color="transparent"
                  class="display-3 font-weight-black mb-4"
                  style="margin:120px;"
                >
                  <v-card-title
                    >Incrementa tus ventas de manera automatica</v-card-title
                  >
                  <v-card-subtitle
                    >Ayudamos a tu negocio a comer monda</v-card-subtitle
                  >
                  <v-card-actions>
                    <v-btn text to="../pages/comoAgregarPagina"
                      >Averigua como</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </div>
            </v-col>

            <v-card
              color="transparent"
              class="title font-weight-regular text-uppercase"
              style="margin:120px;"
            >
              <v-card-title>No se que escribir aca</v-card-title>
              <v-card-subtitle>x2</v-card-subtitle>
            </v-card>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    <section id="features" class="grey lighten-3">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3" style="color:#272e61;">
          Componentes principales que tendra tu bot
        </h2>

        <v-responsive class="mx-auto mb-12" width="56">
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
            <v-card class="py-12 px-4" color="grey lighten-5" flat>
              <v-theme-provider dark>
                <div>
                  <v-avatar color="primary" size="88">
                    <v-icon large v-text="icon"></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title
                style="color:#272e61;"
                class="wpd_wrapper"
                v-text="title"
              ></v-card-title>

              <v-card-text
                style="color:#272e61;"
                class="subtitle-1"
                v-text="text"
              ></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>
  </v-container>
</template>

<script>
import menuchat from "../../qubitsHackathonFrontend/components/menuchat.vue";
import root from "../static/prueba.json";
export default {
  auth: false,
  head() {
    return {
      title: "Qubit APP",
      meta: [
        {
          hid: "Welcome",
          name: "welcome",
          content: "Welcome to Qubit APP"
        }
      ]
    };
  },
  data() {
    return {
      root,
      features: [
        {
          icon: "mdi-contacts",
          title: "coneccion rapida y segura en tiempo real con tus clientes",
          text: "Pablo me la chupa"
        },
        {
          icon: "mdi-sitemap",
          title: "Respuesta rapida y eficiente a cualquier cliente",
          text: "Pablo me la chupa"
        },
        {
          icon: "mdi-robot",
          title: "Automatizacion de servicios",
          text: "Pablo me la chupa"
        }
      ]
    };
  }
};
</script>
<style scoped></style>
