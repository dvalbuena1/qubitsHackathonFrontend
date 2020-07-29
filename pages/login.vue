<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Ingresar</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="onSubmit">
                  <v-text-field
                    v-model="email"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="primary">Login</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  auth: "guest",
  layout: "login",
  methods: {
    async onSubmit() {
      var data = {
        email: this.email,
        password: this.password,
      };

      this.$nuxt.$loading.start();
      try {
        const res = await this.$auth.loginWith("local", { data });
        this.$nuxt.$loading.finish();

        this.$auth.setUserToken(res.data.token);
        console.log(this.$auth.$storage);

        this.$auth.setUser(res.data.user);
        localStorage.setItem('id', res.data.user.id);

      } catch (error) {
        this.$nuxt.$loading.finish();

        console.log(error.response);
      }
    },
  },
  props: {
    source: String,
  },
  data() {
    return {
      password: "",
      passwordRules: [
        (v) => !!v || "Contraseña requerida",
        (v) => Const.passwordPattern.test(v) || "Contraseña invalida",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail requerido",
        (v) => Const.emailPattern.test(v) || "El E-mail debe ser valido",
      ],
    };
  },
};
</script>
