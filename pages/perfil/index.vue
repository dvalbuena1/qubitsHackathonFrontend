<template>
  <div>
    <v-row class="mr-16 pr-16">
      <v-col :cols="2">
        <v-card class="mx-auto" max-width="300" tile>
          <!-- lista de opciones en el menu on click se muestra el componente que referencia la opcion-->
          <v-list rounded>
            <v-subheader>Perfil</v-subheader>
            <v-list-item-group v-model="item" color="primary">
              <!-- <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >-->
              <v-list-item v-on:click="infSelected()">
                <v-list-item-icon>
                  <v-icon v-text="items[0].icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="items[0].text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-on:click="pagSelected()">
                <v-list-item-icon>
                  <v-icon v-text="items[1].icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="items[1].text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-on:click="botSelected()">
                <v-list-item-icon>
                  <v-icon v-text="items[2].icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="items[2].text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col :cols="10">
        <paginasList v-if="paginasSel" />
        <BotsList v-if="botsSelected" />
        <UserInfo v-if="infoSelected" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import paginasList from "../../components/paginasList";
import BotsList from "../../components/BotsList";
import UserInfo from "../../components/UserInfo";
export default {
  auth: true,
  data: () => ({
    item: 1,
    items: [
      { text: "Informacion", icon: "mdi-account" },
      { text: "Paginas", icon: "mdi-facebook" },
      { text: "Bots", icon: "mdi-tooltip-account" },
    ],
    paginasSel: false,
    infoSelected: false,
    botsSelected: false,
  }),
  components: {
    paginasList,
    BotsList,
  },
  methods: {
    pagSelected() {
      this.paginasSel = true;
      this.infoSelected = false;
      this.botsSelected = false;
    },
    infSelected() {
      this.paginasSel = false;
      this.infoSelected = true;
      this.botsSelected = false;
    },
    botSelected() {
      this.paginasSel = false;
      this.infoSelected = false;
      this.botsSelected = true;
    },
  },
};
</script>

<style>
</style>
