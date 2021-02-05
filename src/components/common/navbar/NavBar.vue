<template>
  <div class = "navBar">
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
  //一条常用的流式顶部bar，左中右，左右小按钮，中间长title
  //参照调用 navbar>div[slot="center"]{今日热门}
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  /*使用防挤可使用top:0*/
  .navBar {
    display: flex;
    position: fixed;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
    z-index: 9;
  }

  .left, .right {
    width: 66px;
  }

  .center {
    flex: 1;
  }
</style>
