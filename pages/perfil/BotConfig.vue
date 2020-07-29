<template>
  <div>
    <h1>Creacion de Bot</h1>
    <p>A continuacion podrá realizar la configuración de su bot:</p>
    <NombreBot v-if="!config" @botCreated="config=true" />
    <ChatConfig v-if="config" :json="jsonCofig" @jsonChange="jsonCofig=json" />
  </div>
</template>

<script>
import NombreBot from "../../components/NombreBot";
import chatConfig from "../../components/chatConfig";

export default {
  methods: {
    event() {
      this.$on("jsonChange", (event) => {
        console.log(event);
      });
    },
  },
  data() {
    return {
      config: false,
      jsonCofig: {
        name: "Menu Inicial",
        message: "",
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
