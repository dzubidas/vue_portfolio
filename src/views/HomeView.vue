<script setup>
import { useAboutData } from '@/composables/useAboutData';
import HomePage from '@/components/HomePage.vue';

const { summary, fieldTitle, image} = useAboutData()
</script>

<template>
  <div class="about__block">
    <div class="about__block--text">
      <h1 class="title hero-title">{{ fieldTitle }}</h1>
      <p class="hero-body">{{ summary }}</p>
    </div>
    <div class="about__block--image">
      <img class="hero-img" :src="image" alt="Portfolio Image" v-if="image"/>
      <img class="arrow-img" src="../assets/arrow.png" alt="arrow">
    </div>
  </div>
  <HomePage class="portfolio"/>
</template>

<style scoped>
.about__block {
  min-height: 500px;
  border-radius: 20px;
  background-color: #fff;
  padding: 1rem;
  background-image: url('../assets/net-pattern.svg');
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about__block--text {
  padding: 1rem;
  order: 2;
}

.about__block--image {
  order: 1;
}

.portfolio {
  border-radius: 20px;
  background-color: #fff;
}

.hero-body {
  font-family: Roboto sans-serif !important;
  font-weight: 400;
  font-size: 1.2rem;
}

.hero-img {
  border-radius: 20%;
}

.about__block--image {
  display: flex;
  flex-direction: column;
}

@media (min-width: 810px) {
  .hero-title {
    font-size: 5rem;
    text-transform: uppercase;
  }
  .hero-body {
    font-size: 1.6rem;
  }

  .about__block--text {
    padding: 1rem;
    order: 1;
  }

  .about__block--image {
    order: 2;
  }

}

@media (min-width: 1024px) {
  .about__block {
    flex-direction: row;
  }

  .about__block--text {
    width: 70%;
  }
  
  .portfolio {
    border-radius: 20px;
    background-color: #fff;
  }
  
  .hero-title {
    text-align: start;
    font-size: 4rem;
  }
}
</style>