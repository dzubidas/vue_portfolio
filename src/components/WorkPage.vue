<template>
  <div>
    <ul>
      <li v-for="work in works" :key="work.nid[0].value">
        <Work :name="work.title[0].value" :title="work.body[0].summary"/>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Work from '@/components/Work.vue'

export default {
  components: {
    Work,
  },
  data() {
    return {
      works: []
    }
  },
  mounted() {
    this.fetchPortfolioData()
  },
  methods: {
    fetchPortfolioData() {
      const apiUrl = "http://localhost:32771/api/portfolio"
      axios.get(apiUrl)
        .then(response => {
          this.works = response.data
        })
        .catch(error => {
          console.log("Error fetching portfolio data:", error)
        })
    }
  }
}
</script>

<!--<script setup>-->
<!--import { ref, onMounted } from 'vue'-->
<!--import axios from 'axios'-->

<!--const apiUrl = "http://localhost:32771/api/portfolio"-->
<!--const works = ref([])-->

<!--onMounted(async () => {-->
<!--  try {-->
<!--    const response = await axios.get(apiUrl)-->
<!--    works.value = response.data-->
<!--  } catch (error) {-->
<!--    console.error("Error fetching portfolio data:", error)  -->
<!--  }-->
<!--});-->

<!--</script>-->