<template>
  <nav>
    <h2>Max Arenstein</h2>
    <router-link to="/" name="Home">Home</router-link>
    <router-link to="/aboutme" name="AboutMe">About Me</router-link>
    <a href="https://github.com/MistermindX/" target="_blank">Github</a>
    <a href="https://linkedin.com/in/max-arenstein" target="_blank">LinkedIn</a>
    <a
      href="https://docs.google.com/document/d/1RoZG-4-MlmeCHY2xfvha8LWUZZ1OQ9tBdfTSitIbvL8/edit?usp=sharing"
      target="_blank"
      >Resume</a
    >
    <p>max.arenstein[at]gmail.com</p>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
nav {
  background: #000000;
  padding: 1em;
  text-align: center;
}

nav a,
p,
h2 {
  margin: 1em;
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
}
</style>