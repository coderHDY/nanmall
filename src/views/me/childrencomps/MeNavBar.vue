<template>
  <NavBar class = "me-nav-bar">
    <div slot = "center">我的信息</div>
  </NavBar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "MeNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .me-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    top: 0;
  }
</style>
