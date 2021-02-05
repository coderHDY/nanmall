<template>
  <div class = "tab-bar">
    <slot></slot>
  </div>
</template>
<script>
  //流式底部Bar，类似微信下面的布局,最后一个文字div可传点击颜色  <div :activeColor="" slot="item-name">{{}}<div>
  //参照 tab-bar>tab-bar-item[:link=]{$}>img[slot="item-icon"]+img[slot="item-icon-active"]+div[slot="item-name"]{\{{}}}
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tab-bar {
    display: flex;
    background-color: #f3f3f3;
    position: fixed;
    height: 49px;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 2px rgba(130, 130, 200, .2);
    user-select: none;
    overflow: hidden;
    z-index: 6;
  }
</style>
