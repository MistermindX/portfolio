<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="image" :alt="name" />
    </div>
    <div class="info-wrapper flex-col">
      <h3>{{ name }}</h3>
      <h4>
        <a :href="github" target="_blank">Github</a> |
        <a :href="deployed" target="_blank">Deployed</a>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['name', 'image', 'id', 'github', 'deployed']
}
</script>

<style scoped>
.card {
  width: 200px;
  border-radius: 4px;
  background-color: #000000;
  transition: all 0.2s;
  margin: 10px;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
}

.card a {
  text-decoration: none;
}

.card a:visited {
  color: #ffffff;
  text-decoration: none;
}

.card:hover {
  opacity: 0.8;
}

.card .image-wrapper {
  width: auto;
}
</style>