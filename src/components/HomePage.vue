<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'
import Work from '@/components/Work.vue'

const apiUrl = 'http://portfolio_api.lndo.site:8080/api/portfolio'
// const apiUrl = ' http://localhost:32771'
const body = ref('')
const fieldTitle = ref('');

onMounted(async () => {
  try {
    const response = await axios.get(apiUrl)
    body.value = response.data[0].body[0].value
    fieldTitle.value =response.data[0].field_title[0].value
  } catch (error) {
    console.error("Error fetching portfolio data:", error)
  }
});
</script>
<template>
  <div>
    <ul>
      <li v-for="work in works" :key="work.nid[0].value">
        <Work :name="work.title[0].value" :title="work.body[0].summary"/>
      </li>
    </ul>
  </div>
</template>

<style>

</style>