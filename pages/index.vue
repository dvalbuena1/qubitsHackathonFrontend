<template>
  <v-container fluid>
    <v-img
      dark
      src="https://cdn.discordapp.com/attachments/734978502641713214/738832429506363462/logo_qubot.PNG"
    ></v-img>

    <section id="intro">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
                  <v-card-title>Incrementa tus ventas de manera automatica</v-card-title>
                  <v-card-subtitle>Ayudamos a tu negocio a comer monda</v-card-subtitle>
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
        <h2
          class="display-2 font-weight-bold mb-3"
          style="color:#272e61;"
        >Componentes principales que tendra tu bot</h2>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col v-for="({ icon, title, text }, i) in features" :key="i" cols="12" md="4">
            <v-card class="py-12 px-4" color="grey lighten-5" flat>
              <v-theme-provider dark>
                <div>
                  <v-avatar color="primary" size="88">
                    <v-icon large v-text="icon"></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title
                style="color:#272e61; font-family: 'Lato';"
                class="wpd_wrapper"
                v-text="title"
              ></v-card-title>

              <v-card-text style="color:#272e61;" class="subtitle-1" v-text="text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>

    <section class="grey lighten-2">
      <div class="py-8"></div>
      <v-container class="text-center">
        <h3 class="display-2 font-weight-bold mb-3" style="color:#272e61;">Conocenos</h3>
      </v-container>

      <v-container class="grey lighten-5">
        <v-row no-gutters style="height: 750px;">
          <v-col
            :align-self="align"
            v-for="({ name, title, img }, i) in persons"
            :key="i"
            style="border:5px;margin:5px;margin-left:40px;"
          >
            <v-card class="mx-auto" style="padding: 0px" max-width="434" tile>
              <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
                <v-row align="end" class="fill-height">
                  <v-col align-self="start" class="pa-0" cols="12">
                    <v-avatar class="profile" color="grey" size="164" tile>
                      <v-img v-bind:src="img"></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col class="py-0">
                    <v-list-item color="rgba(0, 0, 0, .4)">
                      <v-list-item-content>
                        <v-list-item-title class="title" v-text="name"></v-list-item-title>
                        <v-list-item-subtitle v-text="title"></v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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
          content: "Welcome to Qubit APP",
        },
      ],
    };
  },
  data() {
    return {
      root,
      features: [
        {
          icon: "mdi-contacts",
          title: "Coneccion rapida y segura en tiempo real con tus clientes",
          text: "Pablo me la chupa",
        },
        {
          icon: "mdi-sitemap",
          title: "Respuesta rapida y eficiente a cualquier cliente",
          text: "Pablo me la chupa",
        },
        {
          icon: "mdi-robot",
          title: "Automatizacion de servicios",
          text: "Pablo me la chupa",
        },
      ],

      persons: [
        {
          name: "Nicolas Londoño",
          title: "Ingeniero de Sistemas",
          img: "https://i.imgur.com/0wHmDMj.jpg",
        },
        {
          name: "Juan David Villamil",
          title: "Ingeniero de Sistemas",
          img: "https://i.imgur.com/0wHmDMj.jpg",
        },
        {
          name: "Daniel Valbuena",
          title: "Ingeniero de Sistemas",
          img: "https://i.imgur.com/0wHmDMj.jpg",
        },
        {
          name: "Pablo Garzon",
          title: "Ingeniero de Sistemas",
          img: "https://i.imgur.com/0wHmDMj.jpg",
        },
        {
          name: "Joshua Olave",
          title: "Ingeniero de Sistemas",
          img: "https://i.imgur.com/0wHmDMj.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>
