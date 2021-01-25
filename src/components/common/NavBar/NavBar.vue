<template>
  <div id = "navBar">
    <div class = "left">
      <slot name = "left"></slot>
    </div>
    <div class = "center">
      <slot name = "center"></slot>
    </div>
    <div class = "right">
      <slot name = "right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  #navBar {
    display: flex;
    position: fixed;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  }

  .left, .right {
    width: 66px;
  }

  .center {
    flex: 1;
  }
</style>
