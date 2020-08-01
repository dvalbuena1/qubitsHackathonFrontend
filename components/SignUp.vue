<template>
  <v-dialog v-model="isVisible" max-width="382">
    <v-card class="mx-auto">
      <v-card-title class="headline">
        <h2>Unete a nosostros</h2>
      </v-card-title>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmit">
        <v-card-text>
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
        </v-card-text>
        <v-card-actions>
          <v-btn block type="submit" class="submit" color="blue" :disabled="!valid">Crear una cuenta</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import Const from "../static/const.js";

export default {
  methods: {
    openDialog() {
      this.isVisible = true;
    },
    closeDialog() {
      this.isVisible = false;
    },
    checkName() {
      var arr = this.name.split(" ");
      var arr2 = new Array();
      arr.map((val) => {
        if (val != "") {
          val = val.charAt(0).toUpperCase() + val.slice(1);
          arr2.push(val);
        }
      });

      this.name = arr2.join(" ");
      console.log(this.name);
    },

    async onSubmit() {
      this.checkName();

      var user = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      try {
        const result = await this.$axios.$post("auth/register", user);

        this.$toast.success("Te has registrado!", {
          icon: "check",
          duration: 5000,
        });

        this.$router.push("login");
        this.$emit("closeDialog");
        return;
      } catch (error) {
        this.$toasted.error("Se ha presentado un error, vuelve ha intentarlo", {
          icon: "report_problem",
          duration: 5000,
        });
        console.log(error);
      }
    },
  },

  data() {
    return {
      isVisible: false,
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
  text-transform: none;
}
.v-card {
  padding: 20px;
}
</style>
