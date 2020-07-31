<template>
  <v-parallax dark src="https://cdn.discordapp.com/attachments/734978502641713214/738603390447255593/unknown.png">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Qubits</h1>
        <h4 class="subheading">Tus compradores mas cerca de ti...</h4>
      </v-col>
    </v-row>
  </v-parallax>
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
    };
  },
};
</script>
