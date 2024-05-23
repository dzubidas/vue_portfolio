<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'

const apiUrl = 'http://portfolio_api.lndo.site:8080/api/projects'
console.log(apiUrl)
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

  </div>
</template>