<template>
  <div>
    <h2>Qubit APP</h2>
    <menuchat
    :node="root"

    />
  </div>
</template>

<script>
import menuchat from '../../qubitsHackathonFrontend/components/menuchat.vue'
import root from '../static/prueba.json'
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
      root
    }
  }
};
</script>
