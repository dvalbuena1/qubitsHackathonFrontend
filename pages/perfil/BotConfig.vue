<template>
  <div>
    <h1>Creacion de Bot</h1>
    <p>A continuacion podrá realizar la configuración de su bot:</p>
    <NombreBot v-if="!config" @botCreated="config=true" />
    <v-form v-if="config" @submit.prevent="onSubmit">
      <ChatConfig :propJson="jsonCofig" :first="true" v-on:jsonChange="change" :depth="1" />
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
  methods: {
    change(value) {
      this.jsonCofig = value;
      console.log(this.jsonCofig);
    },
    onSubmit() {
      console.log(this.jsonCofig);
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
