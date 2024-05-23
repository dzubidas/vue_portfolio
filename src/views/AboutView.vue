<script setup>
// import AboutPage from '@/components/AboutPage.vue'

import { useAboutData } from '@/composables/useAboutData';
const { body, fieldTitle } = useAboutData();
</script>

<!--<template>-->
<!--  <div class="about">-->
<!--    <AboutPage/>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="about">
    <h1>{{ fieldTitle }}</h1>
    <p>{{ body }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>