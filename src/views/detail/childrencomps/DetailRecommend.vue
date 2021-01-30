<template>
  <GoodsList :goods = "recommend"></GoodsList>
</template>

<script>
  import GoodsList from "components/content/goods/GoodsList";

  export default {
    name: "DetailRecommend",
    components: {
      GoodsList
    },
    props: {
      recommend: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>

</style>
