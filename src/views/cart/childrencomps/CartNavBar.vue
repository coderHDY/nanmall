<template>
  <NavBar class = "cart-nav-bar">
    <div slot = "center">
      购物车({{length}})
    </div>
  </NavBar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "CartNavBar",
    props: {
      length: {
        type: Number,
        default: 0
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .cart-nav-bar {
    top: 0;
    background-color: var(--color-tint);
    color: #fff;
    font-size: 18px;
  }
</style>
