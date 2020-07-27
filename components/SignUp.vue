<template>
  <v-overlay :value="isVisible">
    <v-card class="mx-auto" min-width="310">
      <v-row>
        <v-spacer></v-spacer>
        <v-btn class="exit-btn" icon @click="$emit('closeDialog', $event)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
      <v-card-title>
        <h2>Unete a nosostros</h2>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid" @submit.prevent="onSubmit">
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  prepend-icon="mdi-account"
                  v-model="name"
                  :rules="nameRules"
                  label="Nombre"
                  required
                ></v-text-field>

                <v-text-field
                  prepend-icon="mdi-email"
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  prepend-icon="mdi-lock"
                  :type="'password'"
                  v-model="password"
                  :rules="passwordRules"
                  label="Contraseña"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-btn type="submit" class="submit" color="blue" :disabled="!valid">Crear una cuenta</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-overlay>
</template>

<script>
import Const from "../static/const.js";
const Swal = require("sweetalert2");

export default {
  methods: {
    async onSubmit() {
      var user = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      const result = await this.$axios.$post("auth/register", user);

      if (result) {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Registrado satisfactoriamente",
          showConfirmButton: false,
          timer: 2000,
        });
        this.$router.push("login");
        this.$emit("closeDialog");
        return;
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Se genero un error al intentar registrarse",
      });
    },
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      valid: false,
      name: "",
      nameRules: [
        (v) => !!v || "Nombre requerido",
        (v) => v.length >= 3 || "El nombre no puede ser tan corto",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail requerido",
        (v) => Const.emailPattern.test(v) || "El E-mail debe ser valido",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Contraseña requerida",
        (v) => Const.passwordPattern.test(v) || "Contraseña invalida",
      ],
    };
  },
};
</script>

<style>
.submit {
  width: 18rem;
  text-transform: none;
}
</style>
