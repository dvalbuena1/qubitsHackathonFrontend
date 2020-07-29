<template>
  <div>
    <v-form @submit.prevent="nombreBot">
      <v-text-field label="Nombre Bot" outlined required v-model="name"></v-text-field>
      <v-btn type="submit" class="submit" color="blue">Aceptar</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
  }),
  methods: {
    async nombreBot() {
      var id = this.$auth.user.id;
      console.log(this.$auth.$storage);
      const result = await this.$axios.$post(
        "v1/bot/" + id,
        {
          name: this.name,
        },
        {
          headers: {
            "x-auth-token": this.$auth.getToken("local"),
          },
        }
      );
      console.log(result);
    },
  },
};
</script>

<style>
</style>
