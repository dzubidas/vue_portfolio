<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Work from '@/components/PortfolioItem.vue'

const works = ref([]);

const fetchPortfolioData = async () => {
  //const apiUrl = "http://portfolio_api.lndo.site:8080/api/projects"
  const apiUrl = 'http://localhost:32773/api/projects';
  try {
    const response = await axios.get(apiUrl)
    works.value = response.data;
    console.log(works.value)
  } catch (error) {
    console.error("Error fetching portfolio data:", error)
  }
};

onMounted(fetchPortfolioData);
</script>

<template>
  <div>
    <ul>
      <li v-for="work in works" :key="work.nid[0].value">
        <Work :name="work.title[0].value" :summary="work.body[0].summary"/>
      </li>
    </ul>
  </div>
</template>