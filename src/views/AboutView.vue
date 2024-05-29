<script setup>
import { useAboutData } from '@/composables/useAboutData';

const { body, fieldTitle, image } = useAboutData();
</script>

<template>
  <div class="hero-section">
    <div class="hero-container">
      <img class="hero-img" :src="image" alt="Portfolio Image" v-if="image"/>
      <h1 class="title hero-title">{{ fieldTitle }}</h1>
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<style scoped >
.hero-section {
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 10px;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-title {
  text-align: center;
}

.hero-section p {
  color: #fff;
}

@media (min-width: 810px) {
  .hero-section {
    padding: 3rem 3rem 3rem;
  }
  
  .hero-container {
    width: 80%;
  }
  
  .hero-section p {
    font-size: 1.2rem;
    line-height: 3rem;
  }
}
@media (min-width: 1024px) {
  .hero-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-title {
    margin-bottom: 5rem;
  }

  .hero-section p {
    font-size: 1.6rem;
  }
  
  .hero-img {
    width: 400px;
    height: 400px;
    background-color: yellow;
    border-radius: 50%;
    margin-bottom: 3rem;
  }
}
</style>