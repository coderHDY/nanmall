<template>
  <div class = "recom">
    <slot></slot>
  </div>
</template>

<script>
  //一条流式布局的bar
  //参照调用  Recommend>RecommendItem{$}>a>img+div{title}
  export default {
    name: "Recommend"
  }
</script>

<style scoped>
  .recom {
    display: flex;
    position: relative;
    width: 100%;
    text-align: center;
    overflow: hidden;
    margin-top: 5px;
    padding: 0 0 2px;
  }
</style>
