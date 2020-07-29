<template>
  <div>
    <v-form @submit.prevent = "nombreBot">
      <v-text-field
              label="Nombre Bot"
              outlined
              required
              :v-model="name"
            >
      </v-text-field>
    </v-form>
    <v-btn type="submit" class="submit" color="blue">Aceptar</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    name:""
  }),
  methods:{
    async nombreBot(){

      this.$auth.$storage
      const result = await this.$axios.$post("v1/bot", );

    }
  }
}
</script>

<style>

</style>
