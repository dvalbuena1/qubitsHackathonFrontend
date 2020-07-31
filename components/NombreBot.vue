<template>
  <div>
    <v-form v-model="valid" ref="form" @submit.prevent="nombreBot">
      <v-col>
        <v-row>
          <v-text-field :rules="nameRules" label="Nombre Bot" outlined required v-model="name"></v-text-field>
        </v-row>
        <v-row>
          <v-combobox
            v-model="select"
            outlined
            required
            :items="paginas"
            item-text="name"
            :rules="[required]"
            label="Seleccionar pagina del bot"
          ></v-combobox>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-spacer></v-spacer>
          <v-btn type="submit" :disabled="!valid" class="mr-3" color="blue">Aceptar</v-btn>
          <v-btn to="/perfil" color="error">Cancelar</v-btn>
        </v-row>
      </v-col>
    </v-form>
  </div>
</template>

<script>
export default {
  props: {
    paginas: Array,
  },
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (v) => !!v || "Nombre requerido",
      (v) => v.length >= 3 || "El nombre no puede ser tan corto",
    ],
    select: [],
  }),
  methods: {
    async nombreBot() {
      var id = this.$auth.user.id;
      var data = [this.select, this.name];
      this.$emit("botCreated", data);
    },
    cancel() {
      this.$refs.form.reset();
    },
    required(value) {
      if (value instanceof Array && value.length == 0) {
        return "Opcion requerida";
      }
      return !!value || "Opcion requerida";
    },
  },
};
</script>

<style>
</style>
