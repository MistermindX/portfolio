<template>
  <nav>
    <router-link to="/" name="Home">Home</router-link>
    <router-link to="/aboutus" name="AboutUs">About Me</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
nav {
  background: #4254b9;
  padding: 1em;
  text-align: center;
}

nav a {
  margin: 1em;
  color: #1b0091;
  text-decoration: none;
  font-weight: 800;
}
</style>