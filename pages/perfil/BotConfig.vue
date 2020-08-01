<template>
  <div>
    <h1>Creacion de Bot</h1>
    <p>A continuacion podrá realizar la configuración de su bot:</p>
    <NombreBot v-if="!config" v-on:botCreated="botCreated1" :paginas="paginas" />
    <v-form v-if="config" @submit.prevent="onSubmit">
      <ChatConfig
        :propJson="jsonCofig"
        :first="true"
        v-on:jsonChange="change"
        :depth="1"
        :index="1"
      />
      <v-row>
        <v-spacer></v-spacer>
        <v-btn type="submit">Finalizar</v-btn>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import NombreBot from "../../components/NombreBot";
import chatConfig from "../../components/chatConfig";

export default {
  async created() {
    const config = {
      headers: {
        "x-auth-token": this.$auth.getToken("local"),
      },
    };
    const res2 = await this.$axios.$get(
      "/v1/page/" + localStorage.getItem("id"),
      config
    );
    this.paginas = res2;
  },
  methods: {
    change(value) {
      this.jsonCofig = value;
      console.log(this.jsonCofig);
    },
    async onSubmit() {
      console.log(this.jsonCofig);
      const config = {
        headers: {
          "x-auth-token": this.$auth.getToken("local"),
        },
      };
      var data = {
        name: this.nomBot,
        pageId: this.paginaBot,
      };
      try {
        this.$nuxt.$loading.start();
        const res = await this.$axios.$post(
          "/v1/bot/" + localStorage.getItem("id"),
          data,
          config
        );

        var idBot = res.id;

        await this.firstConfigBot(idBot, this.jsonCofig, config);
        this.$nuxt.$loading.finish();
      } catch (error) {
        this.$nuxt.$loading.finish();
        console.log(error);
      }

      this.$router.push("/perfil");
    },
    async firstConfigBot(idBot, json, config) {
      const res = await this.$axios.$post("v1/outflow/" + idBot, {}, config);
      json.message = this.checkMessage(json.message);
      const res2 = await this.$axios.$post(
        "v1/messegeOut/" + res.id,
        {
          message: json.message,
        },
        config
      );

      console.log("root", res);
      for (let index = 0; index < json.options.length; index++) {
        const element = json.options[index];
        await this.configBot(idBot, res.id, element, config);
      }
    },
    async configBot(idBot, previousId, json, config) {
      const res = await this.$axios.$post("v1/inflow/" + idBot, {}, config);
      console.log("inflow", res);

      const res2 = await this.$axios.$put(
        "v1/inflow/" + res.id + "/Previous/" + previousId,
        {},
        config
      );

      var data = {
        message: json.name,
      };
      if (json.message.text == "www.nuestraUrl.com/sceenic/{{ID}}") {
        data.url = "www.nuestraUrl.com/sceenic/{{ID}}";
      }

      const res3 = await this.$axios.$post(
        "v1/messegeIn/" + res.id,
        data,
        config
      );

      const res4 = await this.$axios.$post(
        "v1/outflow/" + idBot,
        { message: json.message },
        config
      );
      console.log("outflow", res);

      const res5 = await this.$axios.$put(
        "v1/outflow/" + res4.id + "/Previous/" + res.id,
        {},
        config
      );
      json.message = this.checkMessage(json.message);
      const res6 = await this.$axios.$post(
        "v1/messegeOut/" + res4.id,
        {
          message: json.message,
        },
        config
      );

      for (let index = 0; index < json.options.length; index++) {
        const element = json.options[index];
        await this.configBot(idBot, res4.id, element, config);
      }
    },
    checkMessage(message) {
      if (message.attachment.payload.url == "") {
        message.attachment = null;
      }
      return message;
    },
    botCreated1(value) {
      this.config = true;
      this.paginaBot = value[0].id;
      this.nomBot = value[1];
    },
  },

  data() {
    return {
      valid: false,
      nomBot: "",
      paginaBot: "",
      paginas: [],
      config: false,
      jsonCofig: {
        name: { text: "Menu Inicial" },
        message: {
          text: "",
          attachment: {
            type: "",
            payload: {
              url: "",
              is_reusable: false,
            },
          },
        },
        options: [],
      },
    };
  },
  components: {
    NombreBot,
    chatConfig,
  },
};
</script>

<style>
</style>
