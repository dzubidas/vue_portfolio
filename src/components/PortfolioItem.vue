<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  name: {
    type: String
  },
  summary: {
    type: String,
    default: 'this was project that I was working on'
  }
}) 
</script>

<template>
  <article>
    <h2>{{props.name}}</h2>
    <p>{{props.summary}}</p>
  </article>
</template>

<style lang="scss" scoped>
article {
  background-color: #bad;
  color: #000;
  width: 400px;
  height: 100px;
  padding: 10px 25px;
  margin: 1rem;
  border-radius: 8px;
}
</style>