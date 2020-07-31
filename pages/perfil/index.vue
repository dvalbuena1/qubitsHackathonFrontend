<template>
  <div>
    <v-row class="mr-16 pr-16">
      <v-col :cols="3">
        <v-card
          class="mx-auto"
          tile
        >
        <!-- lista de opciones en el menu on click se muestra el componente que referencia la opcion-->
          <v-list rounded>
            <v-subheader>Perfil</v-subheader>
            <v-list-item-group v-model="item" color="primary">
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
      <v-col :cols="9">
        <paginasList :paginas="paginas" :pagEmpty="pagEmpty" v-if="paginasSel"/>
        <BotsList :botEmpty="botEmpty" :botInfo="botInfo" v-if="botsSelected"/>
        <UserInfo v-if="infoSelected"/>
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
  async created(){
      this.paginasSel = true
      const config = {
        headers:{
          "x-auth-token": this.$auth.getToken("local")
        }
      }

      try {
        const res = await this.$axios.$get('/v1/user/'+localStorage.getItem('id'),config)
      this.$auth.setUser(res)

      const res2 = await this.$axios.$get('/v1/page/'+localStorage.getItem('id'),config)
      this.paginas = res2

      if(this.paginas.length == 0){
        this.pagEmpty = true
      }

      for (let index = 0; index < this.paginas.length; index++) {
        const element1 = this.paginas[index];
        const res3 = await this.$axios.$get('/v1/bot/'+element1.id,config)
        if(res3.length != 0)
          res3.forEach(element => {
            this.botInfo.push({
              name: element.name,
              pageName: element1.name,
              id: element.id
            })
          });
      }
      console.log(this.botInfo)
      } catch (error) {
        console.log(error)
      }
    },
  data: () => ({
    botInfo:[],
    botEmpty:false,
    pagEmpty:false,
    paginas:[],
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
