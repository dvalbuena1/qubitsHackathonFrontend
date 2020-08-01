<template>
  <div>
    <div>
      <v-text-field
        :rules="optionRules"
        :label="'Nombre opcion '+ index"
        outlined
        v-model="propJson.name.text"
        :readonly="first"
      ></v-text-field>
      <v-text-field
        :disabled="disable"
        prepend-icon="mdi-message-text"
        label="Mensaje de respuesta"
        outlined
        required
        v-model="propJson.message.text"
      ></v-text-field>
      <v-row>
        <v-text-field
          :rules="urlRules"
          type="url"
          :disabled="!media"
          prepend-icon="mdi-folder-multiple-image"
          label="Multimedia de respuesta"
          class="ml-3"
          outlined
          v-model="propJson.message.attachment.payload.url"
        ></v-text-field>
        <v-checkbox
          :disabled="disable"
          class="ml-3"
          style="transform: translate(0,-3px)"
          v-model="media"
        ></v-checkbox>
      </v-row>
      <v-row justify="center" class="pt-0">
        <h4>¿Que tipo de multimedia es?</h4>
        <v-col cols="10">
          <v-btn fab :disabled="!media" @click.prevent="image">
            <v-icon>mdi-image</v-icon>
          </v-btn>
          <v-btn fab :disabled="!media" @click.prevent="video">
            <v-icon>mdi-video</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-checkbox class="ml-3" style="transform: translate(0,-21px)" v-model="call"></v-checkbox>
        <v-icon class="ml-2 mr-3" style="transform: translate(0,-22px)">mdi-phone</v-icon>¿Es una llamada?
      </v-row>

      <v-card class="mb-4" :style="indent" v-for="(item,index) in propJson.options" :key="index">
        <chatConfig
          :propJson="propJson.options[index]"
          v-on:jsonChange="change"
          :index="index+1"
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
import Const from "../static/const.js";

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
      return { transform: `translate( ${this.depth + 50}px)` };
    },
  },
  methods: {
    addField() {
      this.propJson.options.push({
        name: { text: "" },
        message: {
          text: "",
          attachment: {
            type: "",
            payload: {
              url: "",
              is_reusable: false,
            },
          },
        },
        options: [],
      });
    },
    change(value) {
      this.json = value;
      this.changeValue = true;
      console.log(this.jsonCofig);
    },
    image() {
      this.propJson.message.attachment.type = "image";
    },
    video() {
      this.propJson.message.attachment.type = "audio";
    },
  },
  data() {
    return {
      optionRules: [(v) => !!v || "Debe introducir el texto de la opcion"],
      urlRules: [
        (v) => Const.urlPattern.test(v) || "Introduzca una URL valida",
      ],
      disable: false,
      call: false,
      media: false,
      json: {},
      changeValue: false,
    };
  },

  watch: {
    valid: function (newValue, oldValue) {
      if (newValue) {
        this.$emit("validForm");
      } else {
        this.$emit("invalidForm");
      }
    },
    call: function (newValue, oldValue) {
      if (newValue) {
        this.propJson.message.text = "www.nuestraUrl.com/sceenic/{{ID}}";
        this.media = false;
        this.disable = true;
      } else {
        this.disable = false;
        this.propJson.message.text = "";
      }
    },
    media: function (newValue, oldValue) {
      if (!newValue) {
        this.propJson.message.attachment.payload.url = "";
      }
    },
    propJson: function (newValue, oldValue) {
      console.log(newValue);
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
