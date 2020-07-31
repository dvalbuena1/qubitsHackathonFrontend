<template>
  <div>
    <v-btn v-on:click="iniciarSceenic">
      crear sesion
    </v-btn>
  </div>
</template>

<script>
export default {
methods:{
  iniciarSceenic(){
    var ses = Math.random()
    this.$router.push({
      name:'sceenic-id',
      params:{
        id:ses
      }
    });
  }
}
}
</script>

<style>

</style>
