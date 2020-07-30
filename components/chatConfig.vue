<template>
  <div>
    <div>
      <v-text-field
        :label="'Nombre opcion '+ index"
        outlined
        v-model="propJson.name"
        :readonly="first"
      ></v-text-field>
      <v-text-field label="Mensaje de respuesta" outlined required v-model="propJson.message"></v-text-field>
      <v-card class="mb-4" :style="indent" v-for="(item,index) in propJson.options" :key="index">
        <chatConfig
          :propJson="propJson.options[index]"
          v-on:jsonChange="change"
          :index="index"
          :depth="depth+1"
        />
      </v-card>
      <v-btn fab small color="green" @click.prevent="addField">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn fab small class="ml-3" color="red">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "chatConfig",
  props: {
    propJson: Object,
    first: Boolean,
    index: Number,
    depth: Number,
  },
  computed: {
    changeJSON() {
      if (this.changeValue) {
        this.propJson = this.json;
      }
    },
    indent() {
      var change = 1 - (1 - 1 / (1 + this.depth));
      //(1 - 1 / (1+ this.depth * 0.01)) * window.innerWidth;
      console.log(change);
      return { transform: `translate( ${change}px)` };
    },
  },
  methods: {
    addField() {
      this.propJson.options.push({ name: "", message: "", options: [] });
    },
    change(value) {
      this.json = value;
      this.changeValue = true;
      console.log(this.jsonCofig);
    },
  },
  data() {
    return {
      json: {},
      changeValue: false,
    };
  },

  watch: {
    propJson: function (newValue, oldValue) {
      this.$emit("jsonChange", this.propJson);
    },
    "propJson.name": function (newValue, oldValue) {
      this.$emit("jsonChange", this.propJson);
    },
    "propJson.message": function (newValue, oldValue) {
      this.$emit("jsonChange", this.propJson);
    },
    "propJson.options": function (newValue, oldValue) {
      this.$emit("jsonChange", this.propJson);
    },
  },
};
</script>

<style scoped>
.v-text-field {
  max-width: 430px;
}

.v-card {
  max-width: 450px;
  min-width: 450px;
  padding: 15px;
}
</style>
