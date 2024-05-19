<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AboutPage/>
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
<script setup>
import AboutPage from '@/components/AboutPage.vue'
</script>