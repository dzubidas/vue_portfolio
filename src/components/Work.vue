<template>
  <article>
    <h2>{{name}}</h2> <br>
    <span>{{title}}</span>
  </article>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    title: {
      type: String,
      default: 'this was project that I was working on'
    }
  }
}
</script>

<style lang="scss" scoped>
  article {
    background-color: #bad;
    color: #000;
    width: 400px;
    padding: 10px 25px;
    margin: 1rem;
    border-radius: 8px;
  }
</style>