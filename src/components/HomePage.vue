<template>
  <div>
    <div class="featured-container" v-for="(group, index) in groupedPortfolio" :key="index">
      <div class="featured-block" v-if="index === 0">
        <h2 class="title block-title"> Featured Projects</h2>
      </div>
      <ul>
        <li v-for="item in group" :key="item.nid[0].value">
          <PortfolioItem
            :name="item.title[0].value"
            :summary="item.body[0].summary"
            :link="item.field_project_link[0].title"
            :anchor="item.field_project_link[0].uri"
            :image="item.field_image[0].url" />
        </li>
      </ul>
      <div class="featured-block" v-if="index < groupedPortfolio.length - 1">
        <h2 class="title block-title">Featured Work</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import PortfolioItem from '@/components/PortfolioItem.vue'

const portfolio = ref([]);

const fetchPortfolioData = async () => {
  //const apiUrl = 'http://portfolio_api.lndo.site:8080/api/portfolio'
  const apiUrl = 'http://localhost:32773/api/portfolio';
  try {
    const response = await axios.get(apiUrl)
    portfolio.value = response.data;
  } catch (error) {
    console.error("Error fetching portfolio data:", error)
  }
};

onMounted(fetchPortfolioData);

const groupedPortfolio = computed(() => {
  const groups = [];
  for (let i = 0; i < portfolio.value.length; i += 2) {
    groups.push(portfolio.value.slice(i, i + 2));
  }
  return groups;
});
</script>

<style scoped>
.featured-container {
  background-color: black;
}

.featured-block {
  border: 1px solid black;
  border-radius: 20px;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
}

ul {
  display: flex;
  flex-wrap: wrap;
  background-color: black; 
}

li {
 width: 100%;
 //margin-right: 10px;
 //margin-bottom: 20px;
}

@media (min-width: 810px) {
   li {
     width: 50%;
   }

  .featured-block {
    height: 200px;
  }
}

@media (min-width: 1024px) {
 
}
</style>