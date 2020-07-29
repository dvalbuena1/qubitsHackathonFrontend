<template>
  <div>
    <div>
      <h2>{{json.menu}}</h2>
      <v-text-field label="Mensaje bienvenida" outlined required v-model="json.mensaje"></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    json: {},
  },
  data: () => ({
    /* numReplies: 0,
    preguntaComp: false,
    pregunta: "",
    mensajesNode: {
      message: "",
      options: [],
      type: "",
      id: 0,
    },
    actual: mensajesNode,
    mensaje: "",
    type: "",
    id: 0, */
  }),
  /* methods: {
    preguntaDone() {
      this.preguntaComp = true;
    },
    addMessage() {
      let nodeAdd = {
        message: this.mensaje,
        options: [],
        type: this.type,
        idB: id + 1,
      };
      this.actual.options.push(nodeAdd);
      actual = nodeAdd;
    },
    findById(id) {
      if (this.actual.id == id) {
        return this.actual;
      } else {
        for (let index = 0; index < this.actual.options.length; index++) {
          const element = this.actual.options[index];
          return this.findById(id);
        }
      }
    },
  }, */
  watch: {
    json: function (val) {
      this.$emit("jsonChange", val);
    },
  },
};
</script>

<style>
</style>
