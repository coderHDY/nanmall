<template>
  <NavBar class = "category-nav-bar">
    <div slot = "center">宝贝分类</div>
  </NavBar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "CategoryNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .category-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
