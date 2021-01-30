<template>
  <nav-bar class = "home-nav">
    <div slot = "center">今日热门</div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "HomeNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav {
    top: 0;
    background-color: var(--color-tint);
    color: cornsilk;
  }
</style>
