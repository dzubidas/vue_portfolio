<script setup>

const props = defineProps({
  name: {
    type: String
  },
  summary: {
    type: String,
    default: 'this was project that I was working on'
  },
  link: {
    type: String
  },
  anchor: {
    type: String
  },
  image: {
    type: Image
  }
}) 
</script>

<template>
  <article>
    <div class="portfolio-block">
      <img class="portfolio-image" :src="image" alt="Portfolio Image" v-if="image"/>
    </div>
    <div class="portfolio-block">
      <h2 class="portfolio-title">{{props.name}}</h2>
      <div class="portfolio__body">
        <p>{{props.summary}}</p>
      </div>
      <div class="btn">
        <a class="btn-primary" :href="anchor">{{props.link}}</a>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
article {
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 20px;
  padding: 1rem;
  background-color: #fff;
}

.portfolio-block {
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

@media (min-width: 810px) {
  article {
    height: 650px;
  }
  
  .portfolio__body {
    max-height: 200px;
  }
}
</style>