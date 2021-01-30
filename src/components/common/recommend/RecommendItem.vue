<template>
  <div class = "recom-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "RecommendItem",
  }
</script>

<style scoped>
  .recom-item {
    flex: 1;
    position: relative;
    height: auto;
  }

  .recom-item img {
    width: 60%;
    vertical-align: middle;
    margin-bottom: 5px;
  }


</style>
