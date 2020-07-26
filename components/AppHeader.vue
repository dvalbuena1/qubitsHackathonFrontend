<template>
  <header class = "header">
    <h1>Qubit App</h1>
    <ul>
      <li>
        <nuxt-link to='/' > Home</nuxt-link>
        <nuxt-link to='/login' > login</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style>

</style>
