<script setup>
import { useAboutData } from '@/composables/useAboutData';
import PortfolioPage from '@/components/PortfolioPage.vue';

const { summary, fieldTitle } = useAboutData();
</script>

<template>
  <main>
    <div class="about">
      <h1>{{ fieldTitle }}</h1>
      <p>{{ summary }}</p>
    </div>
    <PortfolioPage class="portfolio"/>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  h1 {
    color: #bada55;
  }
}
</style>