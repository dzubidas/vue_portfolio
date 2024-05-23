<script setup>
// import PortfolioPage from '@/components/PortfolioPage.vue'
// import AboutPage from '@/components/AboutPage.vue'
import { useAboutData } from '@/composables/useAboutData';
import PortfolioPage from '@/components/PortfolioPage.vue';

const { summary, fieldTitle } = useAboutData();
</script>

<!--<template>-->
<!--  <main>-->
<!--    <About-page/>-->
<!--    <PortfolioPage/>  -->
<!--  </main>-->
<!--</template>-->

<template>
  <main>
    <div>
      <h1>{{ fieldTitle }}</h1>
      <p>{{ summary }}</p>
    </div>
    <PortfolioPage/>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  h1 {
    color: #bada55;
  }
}
</style>