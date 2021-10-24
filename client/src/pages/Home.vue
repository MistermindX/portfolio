<template>
  <div>
    <header>
      <h1>Projects:</h1>
    </header>
    <div class="content">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
        :image="project.image"
        :id="project.id"
        :github="project.github"
        @projectLink="projectLink"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
export default {
  name: 'Home',
  components: { ProjectCard },
  data: () => ({
    projects: [
      {
        id: 1,
        name: 'Blackjack',
        github: 'https://github.com/MistermindX/BlackJack',
        image:
          'https://res.cloudinary.com/dykazrtyc/image/upload/c_thumb,w_200,g_face/v1635092740/Portfolio/Blackjack.png'
      },
      {
        id: 2,
        name: 'EatUp',
        github: 'https://github.com/samkphillips/EatUp',
        image:
          'https://res.cloudinary.com/dykazrtyc/image/upload/c_thumb,w_200,g_face/v1635093660/Portfolio/EatUp.png'
      }
    ]
  }),
  mounted() {},
  methods: {}
}
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

header {
  text-align: center;
}
</style>