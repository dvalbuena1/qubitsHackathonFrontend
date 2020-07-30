<template>
<div>
  <v-card
    color="indigo"
    @click="expanded = !expanded"
    :style="{'margin-left': depth * 20 + 'px' }"
   class ="node">

   <span
    v-if="hasOptions"
    class="type">{{expanded ? '&#9660;' :'&#9658;' }}</span>
    <span v-else>&#9671;</span>
    {{node.name}}

   <v-card-subtitle style="font-size:1.32em"> {{node.message}}</v-card-subtitle>

  </v-card>
  <menuchat
    v-if="expanded"

    v-for="child in node.options"
    :key="child.name"
    :node ="child"
    :depth ="depth+ 1"

  />
</div>
</template>

<script>
export default {
name: 'menuchat',
props: {
  node: Object,
  depth: {
    type: Number,
    default: 0,
  }
},
data()
{
  return {
    expanded: false,
  }
},

computed: {
  hasOptions(){
    return this.node.options;
  }
}




}
</script>

<style scoped>
.node {
  text-align: left;
  font-size: 20px;

}

</style>
