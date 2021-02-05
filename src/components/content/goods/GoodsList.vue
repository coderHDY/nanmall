<template>
  <div>
    <div class = "goods-list">
      <GoodItem v-for = "(item,index) in goods" :good-item = "item" :key = "index"/>
    </div>
  </div>
</template>

<script>
  import GoodItem from "./GoodItem";

  export default {
    name: "GoodsList",
    components: {
      GoodItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        bs: null,
      }
    },
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-around;
    width: 100%;
    overflow: hidden;
  }
</style>
