<template>
  <div class = "back-top">
    <img src = "~assets/img/common/backTop.png">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    display: block;
    bottom: 50px;
    right: 10px;
  }

  .back-top img {
    width: 50px;
    height: auto;
  }
</style>
