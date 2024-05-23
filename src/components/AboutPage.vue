<!--<script setup>-->
<!--import {ref, onMounted} from 'vue'-->
<!--import axios from 'axios'-->

<!--const apiUrl = 'http://portfolio_api.lndo.site:8080/api/about'-->
<!--// const apiUrl = ' http://localhost:32771'-->
<!--const summary = ref('')-->
<!--const body = ref('')-->
<!--const fieldTitle = ref('')-->

<!--onMounted(async () => {-->
<!--  try {-->
<!--    const response = await axios.get(apiUrl)-->
<!--    body.value = response.data[0].body[0].value-->
<!--    summary.value = response.data[0].body[0].summary-->
<!--    fieldTitle.value = response.data[0].field_title[0].value-->
<!--    -->
<!--  } catch (error) {-->
<!--    console.error("Error fetching portfolio data:", error)-->
<!--  }-->
<!--});-->
<!--</script>-->

<script setup>
import { useAboutData } from '@/composables/useAboutData';

const { body, fieldTitle } = useAboutData();
</script>

<template>
  <div>
    {{fieldTitle}} <br>
    {{body}} <br>
  </div>
</template>