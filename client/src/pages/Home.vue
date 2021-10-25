<template>
  <div>
    <header>
      <h1>Projects</h1>
    </header>
    <div class="content">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
        :image="project.image"
        :id="project.id"
        :github="project.github"
        :deployed="project.deployed"
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
        deployed: 'https://card-blackjack.surge.sh/',
        image:
          'https://res.cloudinary.com/dykazrtyc/image/upload/c_thumb,w_200,g_face/v1635092740/Portfolio/Blackjack.png'
      },
      {
        id: 2,
        name: 'EatUp',
        github: 'https://github.com/samkphillips/EatUp',
        deployed: 'https://mysterious-beach-08090.herokuapp.com/',
        image:
          'https://res.cloudinary.com/dykazrtyc/image/upload/c_thumb,w_200,g_face/v1635093660/Portfolio/EatUp.png'
      },
      {
        id: 3,
        name: 'ComicSalesApp',
        github: 'https://github.com/MistermindX/ComicSalesApp',
        deployed: 'https://cryptic-beach-16216.herokuapp.com/',
        image:
          'https://res.cloudinary.com/dykazrtyc/image/upload/c_thumb,w_200,g_face/v1635183264/Portfolio/ComicSalesApp.png'
      },
      {
        id: 4,
        name: 'BetterBuy',
        github: 'https://github.com/MistermindX/BetterBuy',
        deployed: 'https://adoring-hopper-b86233.netlify.app/',
        image:
          'https://res.cloudinary.com/dykazrtyc/image/upload/c_thumb,w_200,g_face/v1635181503/Portfolio/BetterBuy.png'
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