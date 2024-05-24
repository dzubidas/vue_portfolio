<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import PortfolioItem from '@/components/PortfolioItem.vue'

const portfolio = ref([]);

const fetchPortfolioData = async () => {
  const apiUrl = "http://portfolio_api.lndo.site:8080/api/portfolio"
  // const apiUrl = 'http://localhost:32771';
  try {
    const response = await axios.get(apiUrl)
    portfolio.value = response.data;
  } catch (error) {
    console.error("Error fetching portfolio data:", error)
  }
};

onMounted(fetchPortfolioData);
</script>

<template>
  <div>
    <ul>
      <li v-for="item in portfolio" :key="item.nid[0].value">
        <PortfolioItem :name="item.title[0].value" :summary="item.body[0].summary"/>
      </li>
    </ul>
  </div>
</template>

<style>

</style>